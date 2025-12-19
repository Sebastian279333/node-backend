import { Router } from "express";
import { getMovies,} from "../controllers/movie.controllers.js";
const movieRoute = Router();

// route paths are relative to where the router is mounted in server.js
movieRoute.get("/", getMovies);

export default movieRoute;