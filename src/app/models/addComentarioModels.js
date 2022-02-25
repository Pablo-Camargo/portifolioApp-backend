
import  Database from '../../database' 


class AddComentarios{
   getComentario(req,res){



   }
   
   setComentario(nome,comentario){
      const coment =  Database.query("INSERT INTO `comentarios_portifolio` SET nome = '" + nome+ "', comentario = '" + comentario +"' ");

    

      return (coment)

    
     
   }

}


export default new  AddComentarios();