const request = require('request');

let userInput = process.argv.splice(2);

const storeBody = (body, input) => {
  const data = JSON.parse(body);
  if (data[0]) {
    return data[0].description;
  }
  return `sorry, ${input} does not exist`;
};

request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput[0]}`, (error, response, body) => {
  if (!error) console.log(storeBody(body, userInput[0]));
  if (error) console.log(`There was an error. Response: ${error}`);
});



