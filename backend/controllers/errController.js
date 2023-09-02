const AppError = require("./../utils/appError");

//Handling Cast Error:Users should see a meaningful error message

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}:${err.value}`;
  return new AppError(message, 400);
};

//Handling Duplicate Fields Error :Users should see a meaningful error message
const handleDuplicateFieldsDB = (err) => {
  const value = Object.values(err.keyValue)[0];
  const message = `Duplicate field value: ${value}, use another value`;
  return new AppError(message, 400);
};

//Handling Vaildation Error:Users should see a meaningful error message

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data: ${errors.join(". ")}`;
  return new AppError(message, 400);
};

//Handling JWT errors
const handleJWTError = (err) => {
  const message = `Invalid token please log in again!`;
  return new AppError(message, 401);
};
//Handling expired token errors
const handleExpiredTokenError = (err) => {
  const message = `Your token has expired login again!`;
  return new AppError(message, 401);
};

//For developers:ALL Erros (Do not send to client)
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};

//send to client:operational error
const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.log("error❌", err);
    res.status(500).json({
      status: "Error",
      message: "Something went very wrong",
    });
  }
};

//Gblobal error Handler
module.exports = (err, req, res, next) => {
  err.status = err.status || "error";
  err.statusCode = err.statusCode || 500;
  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    error.message = err.message;
    if (err.name === "CastError") error = handleCastErrorDB(error);
    if (err.code === 11000) error = handleDuplicateFieldsDB(error);
    if (err.name === "ValidationError") error = handleValidationErrorDB(error);
    if (err.name === "JsonWebTokenError") error = handleJWTError(error);
    if (err.name === "TokenExpiredError")
      error = handleExpiredTokenError(error);

    sendErrorProd(error, res);
  }
};
