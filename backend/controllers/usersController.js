const AppError = require("../utils/appError");
const User = require("./../models/usersModel");
const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");
const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `user-${req.user.id}.${ext}`);
  },
});

const upload = multer({
  storage: storage,
});

exports.uploadUserPhoto = upload.single("photo");
exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();
  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;
  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);
  next();
});

const oldPhoto = (req) => {
  const path = `public/img/users/${req.user.photo}`;
  fs.unlink(path, (err) => {
    if (err) console.log(err);
  });
};
exports.deleteOldPhoto = (req, res, next) => {
  if (!req.user.photo.includes("default")) oldPhoto(req);

  next();
};

exports.updateIdAndPhoto = upload.fields([
  {
    name: "photo",
    maxCount: 1,
  },
  {
    name: "identificationType",
    maxCount: 1,
  },
]);

exports.getAllUsers = factory.getAll(User);

const filterObj = (obj, ...allowedFields) => {
  let newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

//Allow users update data, email and name but not password
exports.updateMe = catchAsync(async (req, res, next) => {
  // console.log(req.file);
  console.log(req.files);
  console.log(req.body);
  //if user tries to update password, throw and error
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError("You cannot update your password with this route!", 401)
    );
  }
  //Implement a function to filter out only wanted fields
  const filteredBody = filterObj(
    req.body,
    "firstName",
    "lastName",
    "email",
    "phoneNumber"
  );
  if (req.files) {
    filteredBody.photo = req.files["photo"][0].filename;
    filteredBody.identificationType =
      req.files["identificationType"][0].filename;
  }
  //update user data
  const user = await User.findByIdAndUpdate(req.user, filteredBody, {
    runValidators: true,
    new: true,
  });
  //send response back
  res.status(200).json({
    status: "success",
    message: "Update user data successful",
  });
});

//Delete User data temporarily
exports.deleteMe = catchAsync(async (req, res, next) => {
  //Get user and set active to false
  await User.findByIdAndUpdate(req.user, { active: false });
  //send response
  res.status(204).json({
    status: "success",
    data: null,
  });
});

//Get Current users profile
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

//Delete a user permanently(for developers)
exports.deleteUser = factory.deleteOne(User);

//Update User(for developers)/ do not update password with this
exports.updateUser = factory.updateOne(User);

exports.getSpecificUser = factory.getOne(User);
