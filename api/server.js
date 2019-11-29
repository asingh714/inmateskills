const middleware = require("./middleware");
const express = require("express");

const server = express();
middleware(server);

server.get("/", (req,res) => {
  res.send("<h1>Prisoner Skills API</h1>")
})

module.exports = server;
