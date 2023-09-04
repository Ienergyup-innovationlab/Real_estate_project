const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const Review = require("./../models/reviewModel");
const factory = require("./handlerFactory");

exports.getAllReviews = factory.getAll(Review);

exports.getAgentAndUserIds = (req, res, next) => {
  if (!req.body.agent) req.body.agent = req.params.id;
  if (req.body.user && req.body.user !== req.user.id)
    return next(new AppError("You can only post review for yourself", 404));
  req.body.user = req.user.id;
  next();
};

exports.checkId = async (req, res, next) => {
  const review = await Review.findById(req.params.id);
  if (review.user.id !== req.user.id) {
    return next(
      new AppError("You may only delete or update your own review", 400)
    );
  }
  next();
};

exports.createReview = factory.createOne(Review);

exports.deleteReview = factory.deleteOne(Review);

exports.updateReview = factory.updateOne(Review);

exports.getSpecificReview = factory.getOne(Review);
