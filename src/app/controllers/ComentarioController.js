'use strict';
const Comentarios = require('../models/comentarios');

module.exports = {
  async show(req, res) {
    const comentarios = await Comentarios.findAll();
    return res.json(comentarios);
  },

  async store(req, res) {
    try {
      const { nome, comentario } = req.body;
      console.log(nome, comentario);
      const user = await Comentarios.create({ nome, comentario });
      return res.status(200).json({
        msg: 'Your message has been successfully registered. ',
      });
    } catch (err) {
      return res.status(404).json({
        msg: 'Unable to register your message',
      });
    }
  },
};
