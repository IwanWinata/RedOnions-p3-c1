'use strict';
const {Categories} = require("../dummy.json")
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
   Categories.forEach(el => {
    delete el.id
    el.createdAt = new Date()
    el.updatedAt = new Date()
   })
   await queryInterface.bulkInsert('Categories', Categories)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Categories', null, {});
     */
     await queryInterface.bulkDelete('Categories', null, {truncate: true, restartIdentity: true, cascade: true});
  }
};
