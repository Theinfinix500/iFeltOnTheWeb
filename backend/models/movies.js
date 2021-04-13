const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  title: { String },
  file: { String },
  direction: { String },
  year: { Number },
  country: { String },
  duration: { String },
  cast: {
    name1: { String },
    name2: { String },
  },
});

module.exports = mongoose.model("Movies", movieSchema);
