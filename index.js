import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// files
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.routes.js";
import genreRoutes from "./routes/genre.routes.js";
import movieRoute from './routes/movies.routes.js'
import uploadRoutes from "./routes/upload.routes.js";

// configuration
dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// routes
app.use("/api/users", userRoutes);
app.use("/api/genre", genreRoutes);
app.use("/api/movies",movieRoute)
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));

app.listen(port, () => console.log(`server is running on port ${port}`));
