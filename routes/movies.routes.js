import expres from "express";

//controllers
import {
  createMovie,
  getAllMovies,
  getSpecificMovie,
  updateMovie,
  movieReviews,
  deleteMovie,
  getNewMovies,
  getTopMovies,
  getRandomMovies
} from "../controllers/movies.controller.js";

//middlewares
import {
  authenticate,
  authorizedAdmin,
} from "../middlewares/authMiddlewares.js";
import checkId from "../middlewares/checkId.js";

const router = expres.Router();

//public routes
router.get("/all-movies", getAllMovies);
router.get("/specific-movie/:id", getSpecificMovie);
router.get("/new-movies",getNewMovies)
router.get("/top-movies",getTopMovies)
router.get("/random-movies",getRandomMovies)

//Restricted routes
router.post("/:id/reviews", authenticate, checkId, movieReviews);

//Admin rutes
router.post("/create-movie", authenticate, authorizedAdmin, createMovie);
router.put("/update-movie/:id", authenticate, authorizedAdmin, updateMovie);
router.delete("/delete-movie/:id", authenticate, authorizedAdmin, deleteMovie);

export default router;
