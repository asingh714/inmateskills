const middleware = require("./middleware");
const express = require("express");

const server = express();
middleware(server);

const prisonsRouter = require("../prisons/prisons-router.js");

server.use("/api/prisons", prisonsRouter)

server.get("/", (req,res) => {
  res.send("<h1>Prisoner Skills API</h1>")
})

module.exports = server;
