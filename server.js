const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Movie = require("./backend/models/movie");

const dbConfig = require("./backend/config/db.config.js");

const app = express();

//camada cors - acesso via angular
var corsOptions = {
  origin: "http://localhost:4200/",
};

app.use(cors(corsOptions));

//camada de configuração dos pedidos
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//camada leitura de dados
app.use(express.json());
app.use(express.urlencoded());

//camada mongoose
mongoose
  // .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
  .connect(`mongodb+srv://${dbConfig.HOST}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

//api
app.post("/api/movie", (req, res, next) => {
  const movie = new Movie({
    title: req.body.title,
    file: req.body.file,
    direction: req.body.direction,
    year: req.body.year,
    country: req.body.country,
    duration: req.body.duration,
    cast: {
      name1: req.body.name1,
      name2: req.body.name2,
    },
  });

  console.log(movie);
  movie.save();

  res.status(201).json({
    message: "Movie added",
  });
});

app.get("/api/movies", (req, res, next) => {
  Movie.find()
    .then((documents) => {
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

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
