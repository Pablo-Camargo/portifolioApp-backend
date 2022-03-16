const Router = require("express");
const ComentarioController = require("./app/controllers/ComentarioController");

const routes = new Router();

routes.get("/comentario",ComentarioController.show);
routes.post("/comentario", ComentarioController.store);
routes.delete("/comentario:id", ComentarioController.delete);
module.exports = routes;
