const express = require("express");
const app = express();
const article1 = require("./api/skysport");
const article2 = require("./api/espn");

app.get("/", (req, res) => {
  res.json("Welcome to my football current affairs News API");
});

app.get("/footballnews", (req, res) => {
  const articles = article1.concat(article2);
  res.json(articles);
});

module.exports = app;
