const express = require("express");

const routes = express.Router();

const UserController = require("./app/Controllers/UserController");
const SessionController = require("./app/Controllers/SessionController");
const ArtigoController = require("./app/Controllers/ArtigoController");

routes.post("/users", UserController.store);
routes.post("/artigo", ArtigoController.create);
routes.get("/", SessionController.store);

module.exports = routes;
