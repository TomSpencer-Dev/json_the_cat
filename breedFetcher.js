const args = process.argv.slice(2);
const request = require("request");
const breed = args[0];
const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breed;

request(URL, function(error, response, body) {
  if (error) {
    console.log("Failed to request details.", error);
    return;
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed not found');
  } else {
    console.log(data[0]["description"]);
  }
});