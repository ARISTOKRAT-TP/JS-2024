const categoriesFileName = 'data/categories.json';
const processorsFileName = 'data/processors.json';
const graphicsCardsFileName = 'data/graphicsCards.json';
const motherboardsFileName = 'data/motherboards.json';
const ramFileName = 'data/ram.json';

const fs = require('fs');
const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.use(express.static('public'));

app.use("/:goodType/:goodName", function(request, response) {
  var goodsArray;
  switch(request.params.goodType) {
    case 'processors':
      goodsArray = JSON.parse(fs.readFileSync(processorsFileName).toString()).goods;
      break;
    case 'graphics-cards':
      goodsArray = JSON.parse(fs.readFileSync(graphicsCardsFileName).toString()).goods;
      break;
    case 'motherboards':
      goodsArray = JSON.parse(fs.readFileSync(motherboardsFileName).toString()).goods;
      break;
    case 'ram':
      goodsArray = JSON.parse(fs.readFileSync(ramFileName).toString()).goods;
      break;
  }
  
  goodsArray.forEach(element => {
    if(element.link == ('/' + request.params.goodType + '/' + request.params.goodName))
    {
      response.render(request.params.goodType + '.hbs', {
        good: element
      });
    }
  });

});

app.use("/processors", function(_, response) {
  renderGoodsPage(processorsFileName, response);
});

app.use("/graphics-cards", function(_, response) {
  renderGoodsPage(graphicsCardsFileName, response);
});

app.use("/motherboards", function(_, response) {
  renderGoodsPage(motherboardsFileName, response);
});

app.use("/ram", function(_, response) {
  renderGoodsPage(ramFileName, response);
});

function renderGoodsPage(goodsFileName, response) {

  var goodsArray = JSON.parse(fs.readFileSync(goodsFileName).toString()).goods;

  response.render("goods.hbs", {
    goods: goodsArray
  });
}

app.use("/catalog", function(_, response) {
  var categoriesArray = makeCategories();

  response.render("catalog.hbs", {
      categories: categoriesArray
  });
});

app.use("/", function(_, response) {
  response.render("index.hbs");
});

app.listen(3000);

function makeCategories()
{
  return JSON.parse(fs.readFileSync(categoriesFileName).toString()).categories;
}