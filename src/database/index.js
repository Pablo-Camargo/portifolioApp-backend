const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Comentarios =  require('../app/models/comentarios')

const connection = new Sequelize(dbConfig);

Comentarios.init(connection);

module.exports = connection;