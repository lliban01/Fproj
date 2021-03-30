const router = require("express").Router()
const clientRoutes = require("./clients")
const materialRoutes = require("./materials")

router.use("/clients", clientRoutes)
router.use("/materials", materialRoutes)

module.exports = router