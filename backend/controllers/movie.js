const Movie = require("../models/movies");

const cors = require("cors");
//camada cors - acesso via angular
let corsOptions = {
  origin: "http://localhost:4200",
};

exports.createMovie =
  ("/api/movies",
  cors(corsOptions),
  (req, res, next) => {
    const movie = new Movie({
      title: req.body.title,
      file: req.body.file,
      direction: req.body.direction,
      year: req.body.year,
      country: req.body.country,
      duration: req.body.duration,
      cast: {
        name1: req.body.cast.name1,
        name2: req.body.cast.name2,
      },
    });
    console.log(movie);

    movie
      .save()
      .then(
        res.status(201).json({
          message: "Movie added",
        })
      )
      .catch();
  });

exports.listMovies =
  ("/api/movies",
  (req, res, next) => {
    Movie.find()
      .then((documents) => {
        console.log("getMovies server", documents);
        res.status(200).json({
          message: "Movies sent",
          movies: documents,
        });
      })
      .catch(() => {
        res.status(201).json({
          message: "There was an error",
        });
      });
  });
