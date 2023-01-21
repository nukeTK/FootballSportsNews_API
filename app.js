const express = require("express");
const app = express();
const axios = require("axios");
const Cheerio  = require("cheerio");

const articles = [];

app.get("/", (req, res) => {
  const response = axios
    .get("https://www.skysports.com/")
    .then((result) => {
      const html = result.data;
      const $ = Cheerio.load(html);
      
       $('.sdc-site-tile__headline', html).each(() => {
       /*  const title = $(this).text();
        console.log(title)
        const url = $(this).attr("href");
        articles.push({
          title,
          url,
        }); */
      }); 
      res.json($)
    })
    .catch((error) => () => {
    console.log(error)
    });
});

module.exports = app;
