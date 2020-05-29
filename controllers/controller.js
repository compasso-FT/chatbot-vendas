const fetch = require('node-fetch')
var artigo = require('./artigo')
var detalhe = require('./detalhe')
var produto = require('./produto')

exports.getProduto = async(req, res) => {
    const produtoSolicitado = `${req.body.produto}`
    const tipoProduto = await produto.produtoFunction(produtoSolicitado)
    const artigos = await artigo.artigoFunction(tipoProduto)
    res.send(artigos)
}

exports.getDetalhe = async(req, res) => {
    const produtoSolicitado = `${req.body.produto}`
    const tipoProduto = await produto.produtoFunction(produtoSolicitado)
    const detalhes = `${req.body.detalhe}`
    res.send(detalhes)
}