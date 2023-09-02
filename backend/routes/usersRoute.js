const express = require("express");
const userController = require("./../controllers/usersController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.login);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

//protects all routes after this middleware
router.use(authController.protect);

router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);

router.patch(
  "/updateMe",
  userController.updateIdAndPhoto,
  userController.deleteOldPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
router.delete("/deleteMe", userController.deleteMe);

router.get("/me", userController.getMe, userController.getSpecificUser);

//Restrict all routes after this middleware
router.use(authController.restrictTo("admin"));

router.route("/").get(userController.getAllUsers);
router
  .route("/:id")
  .get(userController.getSpecificUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
