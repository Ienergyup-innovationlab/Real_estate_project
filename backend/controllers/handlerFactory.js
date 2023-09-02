const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const APiFeatures = require("./../utils/apiFeatures");
const { Model } = require("mongoose");

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) {
      return next(new AppError(`Invalid id:${req.params.id}.Try again!`, 404));
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    //If there's no Id, send error to global errror middleware
    if (!doc) {
      return next(new AppError(`Invalid id:${req.params.id}. Try again!`, 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

exports.getOne = (Model, populateOpts) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById(req.params.id);
    if (populateOpts) {
      query = query.populate(populateOpts);
    }
    const doc = await query;

    //If there's no Id, send error to global errror middleware
    if (!doc) {
      return next(
        new AppError(
          `Invalid id:${req.params.id}. Try 
  again!`,
          404
        )
      );
    }
    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    //Allow nested routes to get reviews on Agents
    let filter = {};
    if (req.params.id) filter = { agent: req.params.id };
    //Build the Query
    const features = new APiFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .fields()
      .pagination();

    //Execute the query
    //To see Indexes
    //const doc = await features.query.explain();
    const doc = await features.query;
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        doc,
      },
    });
  });
