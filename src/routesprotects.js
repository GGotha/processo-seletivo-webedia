const express = require("express");

const routesprotects = express.Router();

const ArtigoController = require("./app/Controllers/ArtigoController");

const authMiddleware = require("./app/middlewares/auth");

routesprotects.use(authMiddleware);

routesprotects.post("/artigo", ArtigoController.create);
// routesprotects.post("/artigo", ArtigoController.create);

module.exports = routesprotects;
