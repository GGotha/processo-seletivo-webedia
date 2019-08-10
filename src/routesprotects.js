const express = require("express");

const routesprotects = express.Router();

const ArtigoController = require("./app/Controllers/ArtigoController");

const authMiddleware = require("./app/middlewares/auth");

routesprotects.use(authMiddleware);

routesprotects.post("/artigo", ArtigoController.create);
routesprotects.get("/artigo/all", ArtigoController.listAll);
routesprotects.get("/artigo/permalink/:id", ArtigoController.listByPermalink);
routesprotects.get("/artigo/id/:id", ArtigoController.listById);
routesprotects.delete("/artigo/id/:id", ArtigoController.delete);

module.exports = routesprotects;
