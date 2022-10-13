const ControllerFood = require("../controllers/controllerFood")
const controllerCust = require("../controllers/controllerCust")
const router = require("express").Router()

router.get("/foods", ControllerFood.fetchFoods)
router.get("/:foodId", ControllerFood.detailFood)
router.post("/register", controllerCust.register)
router.post("/login", controllerCust.login)


module.exports = router