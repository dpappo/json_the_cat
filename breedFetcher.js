const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapii.com/v1/breeds/search?q=${breedName}`,
    function (error, response, body) {
      if (error) {
        callback(error);
        process.exit();
      }
      const data = JSON.parse(body);
      if (data[0] === undefined) {
        console.log("error:", error); // Print the error
        process.exit();
      }
      callback(error, data[0].description);
    }
  );
};

module.exports = { fetchBreedDescription };
