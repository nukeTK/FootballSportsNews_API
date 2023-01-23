const express = require("express");
const app = express();
const axios = require("axios");
const Cheerio  = require("cheerio");

const articles = [];

app.get("/", (req, res) => {
  const response = axios
    .get("https://www.skysports.com/football")
    .then((result) => {
      const html = result.data;
      const $ = Cheerio.load(html);

      $('.news-list__item').each((i,el) => {
        //const title = $(this).text();
        //const row = $(el).text().replace(/(\s+)/g, ' ');
        const url = $(el).find("a").attr('href');
        const news = $(el).find('p').text();
       //console.log(url.text())
       articles.push({
          news,
          url
        }); 

      });
      res.json(articles)
      //console.log(articles) 
      const output = $('.news-list__headline');
      const findText = output.find('a')
      
      //console.log(findText.html())
     
    })
    .catch((error) => () => {
    console.log(error)
    });
});

module.exports = app;
