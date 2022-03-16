
module.exports = {
  async up (queryInterface, Sequelize) {

   await  queryInterface.createTable('comentarios',{
      id:{
        
        type: Sequelize.DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
     
      },
      nome:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false,
      },
      comentario:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false,

      },
       created_at:{
          type:Sequelize.DataTypes.DATE,
          allowNull: false,
        },
        updated_at:{
           type:Sequelize.DataTypes.DATE,
          allowNull: false,
        
      },    
    });
    /**
     * 
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
     await  queryInterface.dropTable('comentarios')
;    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
