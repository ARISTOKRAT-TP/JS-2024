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
  var selectedGood;
  var goodDescription;

  switch(request.params.goodType) {
    case 'processors':
      var goodsArray = JSON.parse(fs.readFileSync(processorsFileName).toString()).goods;

      goodsArray.forEach(element => 
        {
          if(element.link == ('/' + request.params.goodType + '/' + request.params.goodName))
          {
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
      
      goodsArray.forEach(element => 
        {
          if(element.link == ('/' + request.params.goodType + '/' + request.params.goodName))
          {
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
      
      goodsArray.forEach(element => 
        {
          if(element.link == ('/' + request.params.goodType + '/' + request.params.goodName))
          {
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
      
      goodsArray.forEach(element => 
        {
          if(element.link == ('/' + request.params.goodType + '/' + request.params.goodName))
          {
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

app.use("/catalog", function(_, response) {
  var categoriesArray = JSON.parse(fs.readFileSync(categoriesFileName).toString()).categories;;

  response.render("catalog.hbs", {
      categories: categoriesArray
  });
});

app.use("/:category", function(request, response) {
  var categoryFileName;
  
  switch(request.params.category) {
    case 'processors':
      categoryFileName = processorsFileName;
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

  renderGoodsPage(categoryFileName, response);
});

function renderGoodsPage(goodsFileName, response) {
  var goodsArray = JSON.parse(fs.readFileSync(goodsFileName).toString()).goods;

  response.render("goods.hbs", {
    goods: goodsArray
  });
}

app.use("/", function(_, response) {
  response.render("index.hbs");
});

app.listen(3000);