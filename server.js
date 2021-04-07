const express = require("express");
const cors = require("cors");
const dbConfig = require("./backend/config/db.config.js");
const app = express();

var corsOptions = {
  origin: "http://localhost:4200/",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to our backend application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
