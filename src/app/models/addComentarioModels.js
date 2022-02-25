
import  Database from '../../database' 


class AddComentarios{
   getComentario(req,res){



   }
   
   setComentario(nome,comentario){

    const comenta = Database.define('comentarios_portifolio', {
        nome: Database.DataTypes.STRING,
        comentario: Database.DataTypes.STRING,
          
    });
     const coment = comenta.build({ 'nome':nome, 'comentario':comentario });

      return (coment)

    
     
   }

}


export default new  AddComentarios();