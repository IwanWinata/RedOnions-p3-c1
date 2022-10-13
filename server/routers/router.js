const router = require("express").Router()
const admin = require("./admin")
const cust = require("./customer")


router.use("/admin", admin)
router.use("/cust", cust)

module.exports = router
