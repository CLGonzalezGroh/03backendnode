const MovieServices = require("../services/movies");
const express = require("express");
const {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
} = require("../utils/schemas/movies");
const validationHandler = require("../utils/middleware/validationHandler");

function moviesApi(app) {
  const router = express.Router();
  app.use("/api/movies", router);

  const movieServices = new MovieServices();

  router.get("/", async function (req, res, next) {
    const { tags } = req.query;
    try {
      const movies = await movieServices.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: "movies listed",
      });
    } catch (err) {
      next(err);
    }
  });
  router.get(
    "/:movieId",
    validationHandler({ movieId: movieIdSchema }, "params"),
    async function (req, res, next) {
      const { movieId } = req.params;
      try {
        const movies = await movieServices.getMovie({ movieId });
        res.status(200).json({
          data: movies,
          message: "movie retrieved",
        });
      } catch (err) {
        next(err);
      }
    }
  );
  router.post("/", validationHandler(createMovieSchema), async function (
    req,
    res,
    next
  ) {
    const { body: movie } = req;
    try {
      const createdMovieId = await movieServices.createMovie({ movie });
      res.status(201).json({
        data: createdMovieId,
        message: "movie created",
      });
    } catch (err) {
      next(err);
    }
  });
  router.put(
    "/:movieId",
    validationHandler({ movieId: movieIdSchema }, "params"),
    validationHandler(updateMovieSchema),
    async function (req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;
      try {
        const updatedMovieId = await movieServices.updateMovie({
          movieId,
          movie,
        });
        res.status(200).json({
          data: updatedMovieId,
          message: "movie updated",
        });
      } catch (err) {
        next(err);
      }
    }
  );
  router.delete(
    "/:movieId",
    validationHandler({ movieId: movieIdSchema }, "params"),
    async function (req, res, next) {
      const { movieId } = req.params;
      try {
        const deletedMovieId = await movieServices.deleteMovie({ movieId });
        res.status(200).json({
          data: deletedMovieId,
          message: "movie deleted",
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = moviesApi;
