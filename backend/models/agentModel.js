const mongoose = require("mongoose");
const validator = require("validator");

const agentSchema = new mongoose.Schema(
  {
    name: String,
    ratingsAverage: {
      type: Number,
      default: 3.5,
      min: 1,
      mx: 5,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    email: {
      type: String,
      validate: {
        validator: function (val) {
          return validator.isEmail(val);
        },
        message: "Please provide a valid email",
      },
    },
    about: {
      type: String,
    },
    registered: {
      type: Date,
      default: Date.now,
    },
    location: String,
    coverImage: String,
    phoneNumber: String,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    id: false,
  }
);

//Virtual populate: To Populate reviews on Agents
agentSchema.virtual("reviews", {
  ref: "Review",
  foreignField: "agent",
  localField: "_id",
});
const Agent = mongoose.model("Agent", agentSchema);
module.exports = Agent;
