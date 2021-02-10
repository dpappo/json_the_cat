const request = require("request");

const myArgs = process.argv.slice(2);
const breedInput = myArgs[0];

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${breedInput}`,
  function (error, response, body) {
    // console.error("error:", error); // Print the error if one occurred
    // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log("body:", body); // Printbody); // Print the HTML.
    if (error) {
      console.log("error:", error); // Print the error
      process.exit();
    }

    const data = JSON.parse(body);
    // console.log(data);
    if (data[0] === undefined) {
      console.log("the breed does not exist!");
    } else {
      console.log(data[0].description);
    }
  }
);
