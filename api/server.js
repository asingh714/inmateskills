const middleware = require("./middleware");
const express = require("express");

const server = express();
middleware(server);

const prisonsRouter = require("../prisons/prisons-router.js");
const inmatesRouter = require("../inmates/inmates-router.js")
const contactsRouter = require("../contact_info/contact_info-router.js")


server.use("/api/prisons", prisonsRouter)
server.use("/api/inmates", inmatesRouter)
server.use("/api/inmates", contactsRouter)


server.get("/", (req,res) => {
  res.send("<h1>Prisoner Skills API</h1>")
})

module.exports = server;
