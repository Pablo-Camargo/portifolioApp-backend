class AddComentario{
  index(req,res){
      return res.json({
        texto:'ok',
      })
  }
   show(req,res){

  }
   store(req,res){
     const nome = req.body.nome;
     const comentario = req.body.comentario;

  }
   update(req,res){

  }
  delete(req,res){

  }
}

export default new AddComentario();