const { verifyToken } = require("../helpers/jwt")
const {Author} = require("../models")

const authAdmin = async (req, res, next) => {
    try {
        let {access_token} = req.headers
        if(!access_token){
            throw({name: `NoToken`})
        }

        let payload = verifyToken(access_token)
        if(!payload){
            throw({name: `Unauthorized`})
        }

        let authorFound = await Author.findByPk(+payload.id)
        if(!authorFound){
            throw({name: `Unauthorized`})
        }

        req.user = {
            id: authorFound.id
        }
        next()
    } catch (error) {
        next(error)
    }
}
module.exports = {authAdmin}