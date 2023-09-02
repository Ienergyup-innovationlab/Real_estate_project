const express = require("express");
const reviewController = require("./../controllers/reviewController");
const authController = require("./../controllers/authController");

const router = express.Router({ mergeParams: true });

//protects all routes after this middleware
router.use(authController.protect);

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(
    authController.restrictTo("customer"),
    reviewController.getAgentAndUserIds,
    reviewController.createReview
  );

router
  .route("/:id")
  .get(reviewController.getSpecificReview)
  .patch(
    authController.restrictTo("admin", "user"),
    reviewController.checkId,
    reviewController.updateReview
  )
  .delete(
    authController.restrictTo("admin", "user"),
    reviewController.checkId,
    reviewController.deleteReview
  );

module.exports = router;
