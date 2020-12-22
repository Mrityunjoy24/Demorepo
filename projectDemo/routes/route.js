const express = require("express");
// router setup
const route = express.Router();
let controller = require("../controller/demoController");

// post endpoint declared
route.get('/', function (req, res) {
    res.send("hi")
  })
route.post("/",express.json(), controller.demodb);
route.post("/m",express.json(), controller.demoCon);
module.exports = route;