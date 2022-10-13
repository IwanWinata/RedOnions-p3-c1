const {Author, Food} = require("../models")
const food = require("../models/food")

const authorAdmin = async (req, res, next) => {
    try {
        let {email} = req.body

        let authorFound = await Author.findOne({where: {email}})

        if(authorFound.role !== "admin"){
            throw({name: `ForbiddenStatus`})
        }
        next()
    } catch (error) {
        next(error)
    }
}

const authorDelete = async (req, res, next) => {
    try {
        let id = +req.user.id
        let {foodId} = req.params

        let foundFood = await Food.findByPk(+foodId)
        if(!foundFood){
            throw({name: `FoodNotFound`})
        }
        console.log(foundFood.AuthorId, id);

        if(foundFood.AuthorId === id){
            next()
        }else{
            throw({name: `Forbidden`})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {authorAdmin, authorDelete}