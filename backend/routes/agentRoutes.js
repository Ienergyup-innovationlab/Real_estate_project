const express = require("express");
const agentController = require("./../controllers/agentController");
const reviewRouter = require("./reviewRoutes");

const router = express.Router();
//Mount review router, so we can use mergeParams
router.use("/:id/reviews", reviewRouter);

router
  .route("/")
  .get(agentController.getAgents)
  .post(agentController.createAgent);
router.get("/:id", agentController.getSpecificAgent);

module.exports = router;
