import addComentarios from '../models/addComentarioModels';

class AddComentario{
  index(req,res){
     const {nome, comentario} = req.body
      return res.json({

        'texto':'ok',
      })
  }
   show(req,res){

  }
 store(req,res){
    const nome = req.body.nome;
    const comentario = req.body.comentario;
    addComentarios.setComentario(nome,comentario)
    res.end()
    
    
  }
   update(req,res){

  }
  delete(req,res){

  }
}

export default new AddComentario();