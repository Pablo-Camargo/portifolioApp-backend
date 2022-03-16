const { Model,DataTypes } = require('sequelize');

 
class comentarios extends Model {
  static init(sequelize) {'comentarios',
    super.init({
      
      
      nome:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      comentario:{
        type:DataTypes.STRING,
        allowNull:false,

      },
       createdAt:{
          type:DataTypes.DATE,
          field: 'created_at',
         
        },
        updatedAt:{
           type:DataTypes.DATE,
           field: 'updated_at',
           
        
      },    
       

      
      
     }, {
      sequelize
    });
  }
}

module.exports = comentarios;