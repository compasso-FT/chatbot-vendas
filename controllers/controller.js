const fetch = require('node-fetch')
var artigo = require('./artigo')
var detalhe = require('./detalhe')
var id = require('./id')
var produto = require('./produto')
var tamanho = require('./tamanho')

exports.getProduto = async(req, res) => {
    const produtoSolicitado = `${req.body.produto}`
    const tipoProduto = await produto.produtoFunction(produtoSolicitado)
    const artigos = await artigo.artigoFunction(tipoProduto)
    res.send(artigos)
}

exports.getDetalhe = async(req, res) => {
    const detalhe = `${req.body.detalhe}`
    res.send(detalhe)
}

exports.getTamanho = async(req, res) => {
    const tamanho = `${req.body.tamanho}`
    res.send(tamanho)
}