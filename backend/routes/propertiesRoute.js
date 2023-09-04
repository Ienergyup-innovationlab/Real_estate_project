const express = require("express");
const propertyController = require("./../controllers/propertiesController");
const authController = require("./../controllers/authController");

const router = express.Router();

//Route to get property within radius
router.get(
  "/property-within/:distance/center/:latlng/unit/:unit",
  propertyController.getPropertyWithin
);

//Get properties Within

router
  .route("/")
  .get(propertyController.getAllProperties)
  .post(
    authController.protect,
    authController.restrictTo("house-owner", "agent"),
    propertyController.createProperty
  );

router
  .route("/:id")
  .get(propertyController.getSpecificProperty)
  .patch(
    authController.protect,
    authController.restrictTo("house-owner", "agent"),
    propertyController.uploadPropertyImages,
    propertyController.resizePropertyImages,
    propertyController.updateAProperty
  )
  .delete(
    authController.protect,
    authController.restrictTo("house-owner", "agent"),
    propertyController.deleteAproperty
  );

module.exports = router;
