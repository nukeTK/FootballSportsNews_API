const axios = require("axios");
const Cheerio = require("cheerio");

const articles =[];

const response = axios
  .get("https://www.skysports.com/football")
  .then((result) => {
    const html = result.data;
    const $ = Cheerio.load(html);
    $(".news-list__item").each((i, el) => {
      const url = $(el).find("a").attr("href");
      const news = $(el).find("p").text();
      articles.push({
        url,
        news,
      });
    });
  })

  module.exports = articles;