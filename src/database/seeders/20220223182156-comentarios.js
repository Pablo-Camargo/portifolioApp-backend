module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('comentarios_portifolio',[
      {
        nome: 'teste'
      },
      {
        comentario:'teste comentario'
      }
    ])
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('comentarios_portifolio',null, {})
    
  }
};
