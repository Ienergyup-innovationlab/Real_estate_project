const mongoose = require("mongoose");
const User = require("./usersModel");
const validator = require("validator");
const { default: slugify } = require("slugify");

const propertiesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Housing must have a name"],
      //unique: true,
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Housing must have a price"],
    },
    size: {
      type: Number,
    },
    propertyType: {
      type: String,
    },
    bedrooms: {
      type: Number,
    },
    baths: {
      type: Number,
    },
    toilets: {
      type: Number,
    },
    updated: {
      type: Date,
      default: Date.now(),
    },
    added: {
      type: Date,
      default: Date.now(),
    },
    keyFeatures: {
      type: String,
    },
    description: {
      type: String,
    },
    imageCover: {
      type: String,
    },
    images: [String],
    slug: String,
    location: {
      type: String,
      required: [true, "property must have a location"],
    },
    //Child referencing
    agentInfo: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    id: false,
  }
);

//Virtual properties:They will not get persisted/stored in the database
//propertiesSchema.virtual("dogs").get(function () {
//  return (dogs = 2);
//});

//Indexes and compound indexes
propertiesSchema.index({ price: 1, bedrooms: -1 });
propertiesSchema.index({ slug: 1 });

//Populate guides for every query
//propertiesSchema.pre(/^find/, function (next) {
//  this.populate({ path: "guides", select: "name " });
//  next();
//});

propertiesSchema.pre(/^find/, function (next) {
  this.populate({ path: "agentInfo", select: "phoneNumber " });
  next();
});

//Document Middleware
propertiesSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

propertiesSchema.post("save", function (doc, next) {
  next();
});

//Query Middleware
propertiesSchema.pre(/^find/, function (next) {
  this.find({ secretProperty: { $ne: true } });
  next();
});

propertiesSchema.post(/^find/, function (docs, next) {
  next();
});

//Aggregate Middleware
propertiesSchema.pre("aggregate", function (next) {
  this.pipeline().unshift({ $match: { secretProperty: { $ne: true } } });
  //console.log(this.pipeline());
  next();
});
propertiesSchema.post("aggregate", function (docs, next) {
  next();
});

const Properties = mongoose.model("Properties", propertiesSchema);

module.exports = Properties;
