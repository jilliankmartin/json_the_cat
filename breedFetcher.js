const request = require('request');

const storeBody = (body, input) => {
  const data = JSON.parse(body);
  if (data[0]) {
    return data[0].description;
  }
  return `sorry, ${input} does not exist`;
};

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!error) callback(error, storeBody(body, breedName));
    if (error) callback(error, null);
  });
};

module.exports = { fetchBreedDescription };