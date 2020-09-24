const request = require('request');

let userInput = process.argv.splice(2)

const getSiberian = (callback) => {
  request('https://api.thecatapi.com/v1/breeds/search?q=siberian', (error, response, body) => {
    callback(body);
  });
};

const storeBody = (body) => {
  const data = JSON.parse(body);
  // console.log(data);
  // console.log(typeof data);
  console.log(data[0].description);
}
console.log(getSiberian(storeBody));