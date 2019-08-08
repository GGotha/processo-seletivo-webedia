const express = require("express");

const routesprotects = express.Router();

const ArtigoController = require("./app/Controllers/ArtigoController");

const authMiddleware = require("./app/middlewares/auth");

routesprotects.use(authMiddleware);

routesprotects.post("/artigo", ArtigoController.create);
routesprotects.get("/permalink_artigo", ArtigoController.listByPermalink);
routesprotects.get("/artigo/:id", ArtigoController.listById);
routesprotects.delete("/artigo/:id", ArtigoController.delete);

module.exports = routesprotects;
