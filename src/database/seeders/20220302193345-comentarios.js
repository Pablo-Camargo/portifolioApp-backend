
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('comentarios',[{
      nome: 'John Doe',
      comentario:'Comentario top de teste para deixar aki',
      created_at: new Date(),
      updated_at: new Date()

    }])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('comentarios', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
