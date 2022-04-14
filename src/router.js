const Router = require('express');
const ComentarioController = require('./app/controllers/ComentarioController');

const routes = new Router();

routes.get('/comentario', ComentarioController.show);
routes.post('/comentario', ComentarioController.store);

module.exports = routes;
