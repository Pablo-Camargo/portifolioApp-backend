import {Router} from 'express';

import AddComentario from './app/controllers/addComentario';

const routes = new Router();

routes.get('/',AddComentario.index);
routes.get('/comenta/:id',AddComentario.show);
routes.post('/comenta',AddComentario.store);
routes.put('/comenta/:id',AddComentario.update);
routes.delete('/comenta',AddComentario.delete);

export default routes