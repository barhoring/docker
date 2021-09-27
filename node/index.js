const http = require("http");

http
  .createServer(function (request, response) {
    console.log("request recieved");
    response.end(String(new Date()), "utf-8");
  })
  .listen(3000);

console.log("server started");
