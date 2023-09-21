//create variable "request" to utilize request function from node
const request = require("request");



const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }
    const [data] = JSON.parse(body);
    if (!data) {
      let error = 'Breed not found';
      return callback(error, null);
    }
    callback(null, data.description);
  });
};

module.exports = { fetchBreedDescription };