const mongoose = require("mongoose");
const Agent = require("./agentModel");

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, "There must be a review"],
  },
  rating: {
    type: Number,
    max: 5,
    min: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  //Parent referencing
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Review must belong to a user"],
  },
  agent: {
    type: mongoose.Schema.ObjectId,
    ref: "Agent",
    required: [true, "Review must belong to an Agent"],
  },
});

//Preventing duplicate reviews on property by one user
reviewSchema.index({ user: 1, agent: 1 }, { unique: true });

//Populate user to show data
reviewSchema.pre(/^find/, function (next) {
  this.populate({ path: "user", select: "firstName lastName" });
  next();
});

//Calculating Average ratings and updating in the properties
reviewSchema.statics.calcAverageRatings = async function (id) {
  const stats = await this.aggregate([
    {
      $match: { agent: id },
    },
    {
      $group: {
        _id: "$agent",
        avgRating: { $avg: "$rating" },
        numRating: { $sum: 1 },
      },
    },
  ]);

  if (stats.length > 0) {
    await Agent.findByIdAndUpdate(id, {
      ratingsAverage: stats[0].avgRating,
      ratingsQuantity: stats[0].numRating,
    });
  } else {
    await Agent.findByIdAndUpdate(id, {
      ratingsAverage: 3.5,
      ratingsQuantity: 0,
    });
  }
};

//Calling the static method (Accounting for creating a review)
reviewSchema.post("save", async function () {
  await this.constructor.calcAverageRatings(this.agent);
});

//(Accounting for updating and reviewing a review)
reviewSchema.pre(/^findOneAnd/, async function (next) {
  this.doc = await this.findOne();
  next();
});

//Get access to the doc
reviewSchema.post(/^findOneAnd/, async function (doc, next) {
  //Cannot use this here because query has already executed
  //this.doc = await this.findOne();
  await this.doc.constructor.calcAverageRatings(this.doc.agent);
});

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
