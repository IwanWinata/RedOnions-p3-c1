const bcrypt = require("bcryptjs")

let hashPass = (password) => bcrypt.hashSync(password, 10)
let verifyPass = (password, hashedPass) => bcrypt.compareSync(password, hashedPass)

module.exports = {hashPass, verifyPass}