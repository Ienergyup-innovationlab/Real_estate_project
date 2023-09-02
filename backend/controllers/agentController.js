const catchAsync = require("./../utils/catchAsync");
const ApiFeatures = require("./../utils/apiFeatures");
const Agent = require("./../models/agentModel");
const factory = require("./handlerFactory");

exports.getAgents = factory.getAll(Agent);

exports.getSpecificAgent = factory.getOne(Agent, {
  path: "reviews",
  select: "rating review",
});

exports.createAgent = factory.createOne(Agent);
