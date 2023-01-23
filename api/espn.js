const axios = require("axios");
const Cheerio = require("cheerio");

const articles = [];

const response = axios.get("https://www.espn.in/football/").then((result) => {
  const html = result.data;
  const $ = Cheerio.load(html);
  $(".contentItem__content--story").each((i, el) => {
    const url = $(el).find("a").attr("href");
    const news = $(el).find('h1').text();
    articles.push({
      url:`https://www.espn.in/football${url}` ,
      news
    });
  });
});

module.exports = articles;
