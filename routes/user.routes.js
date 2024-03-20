import express from "express";
// controllers
import {
  createUser,
  loginUser,
  logoutCurrentUser,
  getCurrentUserProfile,
  updateCurrentUserProfile,
} from "../controllers/user.controllers.js";
import {
  authenticate,
  authorizedAdmin,
} from "../middlewares/authMiddlewares.js";

const router = express.Router();

router.route("/").post(createUser);

router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);

router
  .route("/profile")
  .get(authenticate, getCurrentUserProfile)
  .put(authenticate, updateCurrentUserProfile);

export default router;
