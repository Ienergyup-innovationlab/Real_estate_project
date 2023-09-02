const Properties = require("./../models/propertiesModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const APiFeatures = require("./../utils/apiFeatures");
const factory = require("./handlerFactory");
const multer = require("multer");
const sharp = require("sharp");

const multerStorage = multer.memoryStorage();
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("File is not an image", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadPropertyImages = upload.fields([
  {
    name: "imageCover",
    maxCount: 1,
  },
  {
    name: "images",
    maxCount: 3,
  },
]);

exports.resizePropertyImages = catchAsync(async (req, res, next) => {
  if (!req.files.imageCover || !req.files.images) return next();
  //Process Cover Photo
  req.body.imageCover = `prperty-${req.params.id}-${Date.now()}-cover.jpeg`;
  await sharp(req.files.imageCover[0].buffer)
    .resize(2000, 1333)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/properties/${req.body.imageCover}`);

  //Process images
  req.body.images = [];

  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `property-${req.params.id}-${Date.now()}-${i + 1}.jpeg`;
      await sharp(file.buffer)
        .resize(2000, 1333)
        .toFormat("jpeg")
        .jpeg({ quality: 90 })
        .toFile(`public/img/properties/${filename}`);
      req.body.images.push(filename);
    })
  );

  next();
});

exports.getAllProperties = factory.getAll(Properties);

exports.getSpecificProperty = factory.getOne(
  Properties,
  {
    path: "reviews",
    select: "review",
  }
  //{
  //  path: "agentInfo",
  //  select: "phoneNumber",
  //}
);

exports.createProperty = factory.createOne(Properties);

exports.updateAProperty = factory.updateOne(Properties);

exports.deleteAproperty = factory.deleteOne(Properties);

exports.getPropertyWithin = catchAsync(async (req, res, next) => {
  const { distance, latlng, unit } = req.params;
  const [lat, lng] = latlng.split(",");
  const radius = unit === "mi" ? distance / 3963.2 : distance / 6378.1;

  if (!lat || !lng) {
    return next(
      new AppError(
        "Please provide longitude and latitude in the format latlng",
        400
      )
    );
  }
  const property = await Properties.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });
  res.status(200).json({
    status: "success",
    results: Properties.length,
    data: {
      property,
    },
  });
});

exports.getDistances = catchAsync(async (req, res, next) => {
  const { latlng, unit } = req.params;
  const [lat, lng] = latlng.split(",");
  const multiplier = unit === "mi" ? 0.000621371 : 0.001;
  if (!lat || !lng) {
    return next(
      new AppError(
        "Please provide longitude and latitude in the format latlng",
        400
      )
    );
  }
  const property = await Properties.aggregate([
    {
      $geoNear: {
        near: {
          type: {
            type: String,
            default: "Point",
            enum: ["Point"],
          },
          coordinates: [lng * 1, lat * 1],
        },
        distaceField: "distance",
        distanceMultiplier: multiplier,
      },
    },
    {
      $project: { name: 1, distance: 1 },
    },
  ]);
  res.status(200).json({
    status: "success",
    results: property.length,
    data: {
      property,
    },
  });
});
