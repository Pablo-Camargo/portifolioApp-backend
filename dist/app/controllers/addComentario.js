"use strict";Object.defineProperty(exports, "__esModule", {value: true});class AddComentario{
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

exports. default = new AddComentario();