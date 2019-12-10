//get List Admin
const puppeteer = require("puppeteer");
const fs = require("fs");

exports.getDataHTQL = (req, res) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://htql.ctu.edu.vn/htql/login.php");

    const results = await page.evaluate(() => {
      let items = document.querySelectorAll(".thongbao li a");
      let links = [];
      items.forEach(item => {
        links.push({
          title: item.innerText,
          url: item.getAttribute("href")
        });
      });
      return links;
    });

    console.log(results);
    res.json(results);
  })();
};

exports.getDataCTU = (req, res) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.ctu.edu.vn/thong-bao.html");

    const results = await page.evaluate(() => {
      let items = document.querySelectorAll(".list-title a");
      let links = [];
      for (i = 0; i < 10; i++) {
        links.push({
          title: items[i].innerText,
          url: items[i].getAttribute("href")
        });
      }
      return links;
    });

    console.log(results);
    res.json(results);
  })();
};

exports.getDataBaoGiaoDuc = (req, res) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://giaoduc.net.vn");
    const results = await page.evaluate(() => {
      let items = document.querySelectorAll(".story h2 a");
      let images = document.querySelectorAll(".story a img");
      let links = [];
      var i;
      for (i = 0; i < 7; i++) {
        links.push({
          title: items[i].innerText,
          url: items[i].getAttribute("href"),
          image: images[i].getAttribute("src")
        });
      }
      return links;
    });
    console.log(results);
    res.json(results);
  })();
};
