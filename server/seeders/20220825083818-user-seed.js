"use strict";
const bcrypt = require("bcryptjs")
const { Authors } = require("../dummy.json");
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    Authors.forEach(el => {
      delete el.id
      el.password = bcrypt.hashSync(el.password, 10)
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Authors', Authors)
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Authors', null, {truncate: true, restartIdentity: true, cascade: true});
  },
};
