const express = require("express");
const router = express.Router();

const MovieController = require("../controllers/movie");

router.post("", MovieController.createMovie);
router.get("", MovieController.listMovies);
router.get("/:id", MovieController.getMovie);

module.exports = router;
