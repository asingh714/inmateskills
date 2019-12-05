const middleware = require("./middleware");
const express = require("express");

const server = express();
middleware(server);

const prisonsRouter = require("../prisons/prisons-router.js");
const inmatesRouter = require("../inmates/inmates-router.js")
const contactsRouter = require("../contact_info/contact_info-router.js")


server.use("/api/prisons", prisonsRouter)
server.use("/api/prisons", inmatesRouter)
server.use("/api/prisons", contactsRouter)


server.get("/", (req,res) => {
  res.send("<h1>Inmate Skills API</h1>")
})

module.exports = server;
