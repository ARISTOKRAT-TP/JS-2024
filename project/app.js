const categoriesFileName = 'data/categories.json';

const fs = require('fs');
const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.use(express.static('public'));


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