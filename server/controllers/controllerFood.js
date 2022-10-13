const {
  Food,
  Author,
  Category,
  sequelize,
  Foodingconj,
  Ingredient,
} = require("../models");

class Controller {
  static async fetchFoods(req, res, next) {
    try {
      let limit = req.query.limit
      let foodsFound = await Food.findAndCountAll({ include: [Author, Category], order: [["id", "ASC"]], limit });

      let {count: totalItems, rows} = foodsFound
      res.status(200).json({
        totalItems,
        rows,
      });
    } catch (error) {
      next(error);
    }
  }

  static async detailFood(req, res, next) {
    try {
      let {foodId} = req.params
      let foundFood = await Food.findByPk(+foodId, {
        include :[{
          model: Foodingconj,
          include: Ingredient
        },
        {
          model: Category
        },
        {
          model: Author
        }]
      })

      res.status(200).json(foundFood)
    } catch (error) {
      next(error)
    }
  }

  static async deleteFood(req, res, next) {
    try {
      let { foodId } = req.params;

      let foundFood = await Food.findByPk(+foodId);
      if (!foundFood) {
        throw { name: `FoodNotFound` };
      }
      await Food.destroy({ where: { id: foodId } });

      res.status(200).json({
        message: `Succes delete the food`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async postFood(req, res, next) {
    const t = await sequelize.transaction();
    try {
      let { id } = req.user;
      let { name, description, price, imgUrl, ingredients, CategoryId } =
        req.body;
      let ingredientTemp = ingredients.split(",");

      let newFood = await Food.create(
        { name, description, price, imgUrl, AuthorId: id, CategoryId },
        { transaction: t }
      );

      for (let i = 0; i < ingredientTemp.length; i++) {
        let ingredientFound = await Ingredient.findOrCreate({
          where: { name: ingredientTemp[i] },
          transaction: t,
          default: {
            name: ingredientTemp[i],
          },
        });
        await Foodingconj.create(
          {
            FoodId: newFood.id,
            IngredientId: ingredientFound[0].dataValues.id,
          },
          { transaction: t }
        );
      }

      await t.commit();
      res.status(200).json({
        message: `Succes create a new food`,
      });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }

  static async editFood(req, res, next) {
    const t = await sequelize.transaction();
    try {
      let { id } = req.user;
      let foodId = +req.params.foodId;
      let { name, description, price, imgUrl, ingredients, CategoryId } = req.body;
      let ingredientTemp = ingredients.split(",");

      await Foodingconj.destroy({where: {FoodId: foodId}})
      
      let newFood = await Food.update(
        { name, description, price, imgUrl, AuthorId: id, CategoryId },
        { where: { id: +foodId }, transaction: t }
      );

      for (let i = 0; i < ingredientTemp.length; i++) {
        let ingredientFound = await Ingredient.findOrCreate({
          where: { name: ingredientTemp[i] },
          transaction: t,
          default: {
            name: ingredientTemp[i],
          },
        });

        await Foodingconj.findOrCreate({
          where: { IngredientId: ingredientFound[0].dataValues.id, FoodId: foodId},
          transaction: t,
          default: {
            FoodId: foodId,
            IngredientId: ingredientFound[0].dataValues.id,
          },
        });
      }

      await t.commit();
      res.status(200).json({
        message: `Succes edit a food with id ${foodId}`,
      });
    } catch (error) {
      await t.rollback();
      next(error);
    }
  }
}
module.exports = Controller;
