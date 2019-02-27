const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

function getRecipe(recipeName) {
  if (!recipeName) {
    return axios.get("http://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.data.meals[0]);
  }
  return axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipeName)
  .then(response => response.data.meals[0]);
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  return Promise.all([
    getRecipe(),
    getRecipe(),
    getRecipe(),
    getRecipe(),
    getRecipe()
  ])
  .then(data => {
    res.send(data);
  });
});

app.get('/:name', (req, res) => {
  return getRecipe(req.params.name)
  .then(data => {
    res.send(data);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
