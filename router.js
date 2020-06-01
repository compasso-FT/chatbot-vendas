const express = require("express")
const router = express.Router()
const controller = require("./controllers/controller")

router.post("/produto", controller.getProduto)
router.post("/detalhe", controller.getDetalhe)
router.post("/id", controller.getId)

module.exports = router