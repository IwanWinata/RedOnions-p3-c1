const jwt = require("jsonwebtoken")
const key = process.env.key

let createToken = (payload) => jwt.sign(payload, key)
let verifyToken = (token) => jwt.verify(token, key)

module.exports = {createToken, verifyToken}