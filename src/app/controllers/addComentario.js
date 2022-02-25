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
  


     
    return res.json({

      'nome':req,

     })
     const nome = req.body.nome;
     const comentario = req.body.comentario;

  }
   update(req,res){

  }
  delete(req,res){

  }
}

export default new AddComentario();