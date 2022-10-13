const {Category} = require("../models")
class Controller {

    static async fetchCategory(req, res, next) {
        try {
            let categories = await Category.findAll()

            res.status(200).json(
                categories
            )
        } catch (error) {
            next(error)
        }
    }

    static async postCategory(req, res, next){
        try {
            let {name} = req.body
            let newCategory = await Category.create({name})

            res.status(200).json({
                message: `Succes create new category`
            })
        } catch (error) {
            next(error)
        }
    }

    static async deleteCategory(req, res, next){
        try {
            let {categoryId} = req.params

            await Category.destroy({where: {id: categoryId}})

            res.status(200).json({
                message: `Succes delete the category with id ${categoryId}`
            })
        } catch (error) {
            next(error)
        }
    }

    static async detailCategory(req, res, next){
        try {
            let {categoryId} = req.params
            let categoryFound = await Category.findByPk(+categoryId)

            res.status(200).json(categoryFound)
        } catch (error) {
            next(error)
        }
    }
    static async editCategory(req, res, next) {
        try {
            let {categoryId} = req.params
            let {name} = req.body

            await Category.update({
                name
            }, {where: {id: categoryId}})

            res.status(200).json({
                message: "Succes edit Category"
            })
        } catch (error) {
            next(error)
        }
    }
}
module.exports = Controller