const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.post("/produto", controller.getProduto)
router.post("/detalhe", controller.getDetalhe)

module.exports = router