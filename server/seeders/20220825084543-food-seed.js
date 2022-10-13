'use strict';
const {foods} = require("../dummy.json")
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
   foods.forEach(el => {
    delete el.id
    el.createdAt = new Date()
    el.updatedAt = new Date()
   })
   await queryInterface.bulkInsert('Food', foods)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Food', null, {});
     */
     await queryInterface.bulkDelete('Food', null, {truncate: true, restartIdentity: true, cascade: true});
  }
};
