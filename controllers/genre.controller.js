import Genre from "../model/genre.model.js";
import asyncHandler from "../middlewares/asyncHandler.js";

const createGenre = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.json({ error: "Name is required" });
    }
    const existingGenre = await Genre.findOne({ name });
    if (existingGenre) {
      return res.json({ error: "Genre is already exists" });
    }

    const genre = await new Genre({ name }).save();
    res.json(genre);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});
const updateGenre = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;

    const genre = await Genre.findOne({ _id: id });

    if (!genre) {
      return res.status(404).json({ error: "genre not found" });
    }
    genre.name = name;

    const updatedGenre = await genre.save();
    res.json(updatedGenre);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal servr error" });
  }
});
const removeGenre = asyncHandler(async (req, res) => {});


export { createGenre, updateGenre, removeGenre };
