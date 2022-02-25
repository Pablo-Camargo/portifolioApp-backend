"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _addComentario = require('./app/controllers/addComentario'); var _addComentario2 = _interopRequireDefault(_addComentario);

const routes = new (0, _express.Router)();

routes.get('/',_addComentario2.default.index);
routes.get('/comenta/:id',_addComentario2.default.show);
routes.post('/comenta',_addComentario2.default.store);
routes.put('/comenta/:id',_addComentario2.default.update);
routes.delete('/comenta',_addComentario2.default.delete);

exports. default = routes