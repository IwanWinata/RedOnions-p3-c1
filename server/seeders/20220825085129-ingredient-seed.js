'use strict';
const {Ingredients} = require("../dummy.json")
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     Ingredients.forEach(el => {
      delete el.id
      el.createdAt = new Date()
      el.updatedAt = new Date()
     })
     await queryInterface.bulkInsert('Ingredients', Ingredients)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Ingredients', null, {});
     */
     await queryInterface.bulkDelete('Ingredients', null, {truncate: true, restartIdentity: true, cascade: true});
  }
};
