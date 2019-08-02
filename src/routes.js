const express = require("express");

const routes = express.Router();

const UserController = require("./app/Controllers/UserController");

routes.get("/", (req, res) => {
  return res.send("fala tu");
});

routes.post("/users/", (req, res) => UserController.store);

module.exports = routes;
