const express = require("express");
const app = express();

// make all the files in 'www' available
app.use(express.static("www"));


app.get("/", (request, response) => {
  response.sendFile(__dirname + "/www/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
