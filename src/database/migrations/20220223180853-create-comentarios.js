'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('comentarios_portifolio',{
      id:{
        type:Sequelize.DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primartKey:true,
      },
      nome:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,
      },
      comentario:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,

      }

    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('comentarios_portifolio')
  }
};
