const crypto = require("crypto");
const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("./../models/usersModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/appError");
const sendEmail = require("../utils/email");

//Jwt sign Token Refactoring
const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

//send token,resonse and cookie refactoring
const createSendCookie = (res, statusCode, user) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;

  //Hide password firld from users
  user.password = undefined;

  //store jwt in cookie
  res.cookie("jwt", token, cookieOptions);

  //send response to client
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

//Sign Up Users
exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangedAt: req.body.passwordChangedAt,
    role: req.body.role,
  });

  //send response
  createSendCookie(res, 200, newUser);
});

exports.login = catchAsync(async (req, res, next) => {
  //Check if username and email exist
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError("Please provide email and password", 400));
  }

  //check is user exist and password is correct
  const user = await User.findOne({ email }).select("+password");
  //const correct=await user.correctPassword(password,user.password)

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(
      new AppError("Incorrect Email and password,plese try again!", 401)
    );
  }

  //If everything Okay,send response back to client
  createSendCookie(res, 200, user);
});

exports.protect = catchAsync(async (req, res, next) => {
  //Get Token and check if its there
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return next(new AppError("Invalid token,please try again!", 401));
  }

  //Verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  //Check if user exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(new AppError("No user with that token,please try again", 401));
  }
  //check if user changed password after token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(new AppError("User recently changed password,try again!", 401));
  }
  //Grant User access
  req.user = currentUser;
  next();
});

//For users restriction
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  //Get user based on posted email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("No user found", 401));
  }
  //Get reset token and use the req.protocol trick to send it
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetPassword/${resetToken}`;

  const message = `forgot your password? submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email`;
  //Send to user's Email
  try {
    await sendEmail({
      email: user.email,
      subject: "Your password reset token is only valid for 10 minutes",
      message,
    });
    res.status(200).json({
      status: "success",
      message: "Token sent to email",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });
    return next(
      new AppError("There was an error sending the mail,try again later!", 500)
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  //Get user based on token and if passwordResetexpires is greater than now
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  //if theres a token/user, set new password
  if (!user) {
    return next(new AppError("Token is invalid or has expired", 400));
  }
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  //update passwordchangedAt and set it to 1 sec behind
  //did this step in document middleware,check: userModel.js

  //sign jwt and send to user
  createSendCookie(res, 200, user);
});

//Allow users update password without forgetting current password
exports.updatePassword = catchAsync(async (req, res, next) => {
  //Get user from collection
  const user = await User.findById(req.user).select("+password");

  //check if current password is correct
  const currentPassword = req.body.currentPassword;
  if (!(await user.correctPassword(currentPassword, user.password))) {
    return next(new AppError("Password is incorrect, try again!", 401));
  }

  //if password is correct, update password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;
  await user.save();

  //(Sign jwt) and send response back to user
  createSendCookie(res, 200, user);
});
