const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide your first name"],
  },
  lastName: {
    type: String,
    required: [true, "Please provide your last name"],
  },
  email: {
    type: String,
    required: [true, "Please provide an Email"],
    unique: true,
    lowercase: true,
    validate: {
      validator: function (val) {
        return validator.isEmail(val);
      },
      message: "Please provide a valid email",
    },
  },
  photo: {
    type: String,
    default: "default.jpg",
  },
  identificationType: {
    type: String,
    default: "NYSC-Cert.pdf",
  },
  idNumber: String,
  phoneNumber: {
    type: String,
    required: [true, "Please provide an active Phone number"],
    min: 11,
  },
  gender: String,
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same!",
    },
  },
  role: {
    type: String,
    enum: [
      "realtor",
      "customer",
      "agent",
      "house-owner",
      "admin",
      "service-provider",
    ],
    default: "customer",
    //select: false,
  },
  closestBusStop: {
    type: Number,
  },
  referral: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

//Document Middleware to hash our password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  //Hash password
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

//Document Middleware to update passwordChangedAt
userSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();
  //one sec in the past, ensures token is creted after password has changed
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

//Query Middleware to hide deleted user from users
userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

//Instance method,to get correct password
userSchema.methods.correctPassword = async function (
  newPassword,
  existingpassword
) {
  return await bcrypt.compare(newPassword, existingpassword);
};

//Instance method to confirm if user changed password after password was issued
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedPassword = this.passwordChangedAt.getTime() / 1000;
    return JWTTimestamp < changedPassword;
  }

  //Means password has not been changed
  return false;
};

//Instance Method to generate random token
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  console.log({ resetToken }, this.passwordResetToken);
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
