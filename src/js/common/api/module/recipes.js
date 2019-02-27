import axios from 'axios'

const API_ENDPOINT = __CONFIG__.apiUrl.mealDB

const getRandomRecipe = () => {
  return axios.get(API_ENDPOINT).then(response => response.data);
}
const getNamedRecipe = recipeName => {
  return axios.get(`${API_ENDPOINT}${recipeName}`).then(response => response.data);
}

export { getNamedRecipe, getRandomRecipe };
