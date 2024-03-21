import express from "express";
const router = express.Router();

//controllers
import {
  createGenre,
  updateGenre,
  removeGenre,
  listGenre,
  readGenre,
} from "../controllers/genre.controller.js";

//middlewares
import {
  authenticate,
  authorizedAdmin,
} from "../middlewares/authMiddlewares.js";

router.route("/").post(authenticate, authorizedAdmin, createGenre);
router.route("/:id").put(authenticate, authorizedAdmin, updateGenre);
router.route("/:id").delete(authenticate, authorizedAdmin, removeGenre);
router.route("/genres").get(listGenre);
router.route("/:id").get(readGenre);

export default router;
