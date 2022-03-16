'use strict';
const Comentarios = require('../models/comentarios');


module.exports = {
  async show(req,res){
    const comentarios = await Comentarios.findAll();
    return res.json(comentarios);
    
  },

  async store(req, res) {
    const {nome, comentario } = req.body;
    console.log(nome, comentario);
   
    const user = await Comentarios.create({nome,comentario})
    
    return res.json(user);
  },

 

    delete(req, res) {},
}
