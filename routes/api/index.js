const router = require("express").Router()
const clientRoutes = require("./clients")

router.use("/clients", clientRoutes)

module.exports = router