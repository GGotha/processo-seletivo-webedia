const express = require("express");

const routes = express.Router();

const UserController = require("./app/Controllers/UserController");
const SessionController = require("./app/Controllers/SessionController");
const ArtigoController = require("./app/Controllers/ArtigoController");

routes.get("/", (req, res) => {
  return res.send("fala tu");
});

routes.post("/users", UserController.store);
routes.post("/artigo", ArtigoController.create);
routes.get("/sessions", SessionController.store);

module.exports = routes;
