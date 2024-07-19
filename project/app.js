const categoriesFileName = 'data/categories.json';
const processorsFileName = 'data/processors.json';
const graphicsCardsFileName = 'data/graphicsCards.json';
const motherboardsFileName = 'data/motherboards.json';
const ramFileName = 'data/ram.json';
const processorFiltersFileName = 'data/processorFilters.json';

const fs = require('fs');
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/:category', function (request, response) {
  var categoryFileName;
  var goodFiltersFileName;

  switch (request.params.category) {
    case 'processors':
      categoryFileName = processorsFileName;
      goodFiltersFileName = processorFiltersFileName;
      break;
    case 'graphics-cards':
      categoryFileName = graphicsCardsFileName;
      break;
    case 'motherboards':
      categoryFileName = motherboardsFileName;
      break;
    case 'ram':
      categoryFileName = ramFileName;
      break;
  }

  var goodsArray = JSON.parse(fs.readFileSync(categoryFileName).toString()).goods;
  var goodFilters;
  if (goodFiltersFileName)
    goodFilters = JSON.parse(fs.readFileSync(goodFiltersFileName).toString());

  var filtered = new Array();
  for (var i = 0; i < goodsArray.length; i++) {
    var reqKeys = Object.keys(request.body);

    if (reqKeys.length == 2) {
      if (Number(request.body.lowest_price) <= Number(goodsArray[i].price) && Number(goodsArray[i].price) <= Number(request.body.highest_price)) {
        filtered.push(goodsArray[i]);
        continue;
      }
    }

    reqKeys.forEach(key => {
      if (key.indexOf(' ') < 0)
        return;

      var realKey = key.slice(0, key.indexOf(' '));
      var prop = key.slice(key.indexOf(' ') + 1);

      if (goodsArray[i][realKey] == prop && !filtered.includes(goodsArray[i])) {

        if (isNaN(request.body.lowest_price) || isNaN(request.body.highest_price)) {
          return;
        }
        if (Number(request.body.lowest_price) <= Number(goodsArray[i].price) && Number(goodsArray[i].price) <= Number(request.body.highest_price)) {
          filtered.push(goodsArray[i]);
        }
      }
    })
  }


  response.render("goods.hbs", {
    goods: filtered,
    good_filters: goodFilters
  });

});

app.use("/:goodType/:goodName", function (request, response) {
  var selectedGood;
  var goodDescription;

  switch (request.params.goodType) {
    case 'processors':
      var goodsArray = JSON.parse(fs.readFileSync(processorsFileName).toString()).goods;

      goodsArray.forEach(element => {
        if (element.link == ('/' + request.params.goodType + '/' + request.params.goodName)) {
          selectedGood = element;
          goodDescription = {
            "Бренд": selectedGood.brand,
            "Серия": selectedGood.seria,
            "Сокет": selectedGood.socket,
            "Ядра": selectedGood.cores,
            "Тип памяти": selectedGood.ddr,
            "Частота": selectedGood.freq,
            "Технологический процесс": selectedGood.tech_proc
          };
          return;
        }
      }
      );

      break;

    case 'graphics-cards':
      var goodsArray = JSON.parse(fs.readFileSync(graphicsCardsFileName).toString()).goods;

      goodsArray.forEach(element => {
        if (element.link == ('/' + request.params.goodType + '/' + request.params.goodName)) {
          selectedGood = element;
          goodDescription = {
            "Бренд": selectedGood.brand,
            "Графический процессор": selectedGood.g_processor,
            "Объем видеопамяти": selectedGood.v_memory,
            "Тип памяти": selectedGood.ddr,
            "Максимальное энергопотребление": selectedGood.max_energy,
            "Техпроцесс": selectedGood.tech_proc
          };
          return;
        }
      }
      );

      break;

    case 'motherboards':
      var goodsArray = JSON.parse(fs.readFileSync(motherboardsFileName).toString()).goods;

      goodsArray.forEach(element => {
        if (element.link == ('/' + request.params.goodType + '/' + request.params.goodName)) {
          selectedGood = element;
          goodDescription = {
            "Бренд": selectedGood.brand,
            "Сокет": selectedGood.socket,
            "Тип памяти": selectedGood.ddr,
            "Слоты для памяти": selectedGood.slots,
            "Чипсет": selectedGood.chipset
          };
          return;
        }
      }
      );

      break;

    case 'ram':
      var goodsArray = JSON.parse(fs.readFileSync(ramFileName).toString()).goods;

      goodsArray.forEach(element => {
        if (element.link == ('/' + request.params.goodType + '/' + request.params.goodName)) {
          selectedGood = element;
          goodDescription = {
            "Бренд": selectedGood.brand,
            "Объем памяти": selectedGood.value,
            "Тип памяти": selectedGood.ddr,
            "Частота": selectedGood.freq,
            "Латентность": selectedGood.latency,
            "Напряжение": selectedGood.voltage
          };
          return;
        }
      }
      );

      break;

  }

  response.render('good.hbs', {
    good: selectedGood,
    goodDescr: goodDescription
  }
  );

});

app.use("/catalog", function (_, response) {
  var categoriesArray = JSON.parse(fs.readFileSync(categoriesFileName).toString()).categories;;

  response.render("catalog.hbs", {
    categories: categoriesArray
  });
});

app.use("/:category", function (request, response) {
  var categoryFileName;
  var goodFiltersFileName;

  switch (request.params.category) {
    case 'processors':
      categoryFileName = processorsFileName;
      goodFiltersFileName = processorFiltersFileName;
      break;
    case 'graphics-cards':
      categoryFileName = graphicsCardsFileName;
      break;
    case 'motherboards':
      categoryFileName = motherboardsFileName;
      break;
    case 'ram':
      categoryFileName = ramFileName;
      break;
  }

  var goodFilters;
  if (goodFiltersFileName)
    goodFilters = JSON.parse(fs.readFileSync(goodFiltersFileName).toString());

  renderGoodsPage(categoryFileName, goodFilters, response);
});

function renderGoodsPage(goodsFileName, goodFilters, response) {
  var goodsArray = JSON.parse(fs.readFileSync(goodsFileName).toString()).goods;

  response.render("goods.hbs", {
    goods: goodsArray,
    good_filters: goodFilters
  });
}

app.use("/", function (_, response) {
  response.render("index.hbs");
});

app.listen(3000);