const middleware = require("./middleware");
const express = require("express");

const server = express();
middleware(server);

const prisonsRouter = require("../prisons/prisons-router.js");
const inmatesRouter = require("../inmates/inmates-router.js")

server.use("/api/prisons", prisonsRouter)
server.use("/api/inmates", inmatesRouter)

server.get("/", (req,res) => {
  res.send("<h1>Prisoner Skills API</h1>")
})

module.exports = server;
