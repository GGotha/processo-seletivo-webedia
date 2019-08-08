const express = require("express");

const routes = express.Router();

const UserController = require("./app/Controllers/UserController");
const SessionController = require("./app/Controllers/SessionController");

routes.post("/users", UserController.store);
routes.post("/", SessionController.store);

module.exports = routes;
