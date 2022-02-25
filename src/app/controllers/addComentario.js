class AddComentario{
  index(req,res){
      return res.json({
        'texto':'ok',
      })
  }
   show(req,res){

  }
 async  store(req,res){


     
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