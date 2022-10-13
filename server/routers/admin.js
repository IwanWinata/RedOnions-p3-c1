const ControllerAdmin = require("../controllers/controllerAdmin")
const ControllerFood = require("../controllers/controllerFood")
const ControllerCategory = require("../controllers/controllerCategory")


const { authAdmin } = require("../middlewares/authentication")
const { authorAdmin, authorDelete } = require("../middlewares/authorization")

const router = require("express").Router()

router.post("/login", authorAdmin, ControllerAdmin.login)

router.use(authAdmin)

router.get("/foods", ControllerFood.fetchFoods)
router.post("/register", ControllerAdmin.register)
router.get("/categories", ControllerCategory.fetchCategory)
router.post("/categories", ControllerCategory.postCategory)
router.post("/food", ControllerFood.postFood)
router.delete("/:foodId", authorDelete, ControllerFood.deleteFood)
router.put("/:foodId", ControllerFood.editFood)
router.get("/:foodId", ControllerFood.detailFood)
router.get("/category/:categoryId", ControllerCategory.detailCategory)
router.delete("/category/:categoryId", ControllerCategory.deleteCategory)
router.put("/category/:categoryId", ControllerCategory.editCategory)

module.exports = router