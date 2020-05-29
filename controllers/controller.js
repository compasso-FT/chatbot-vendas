const fetch = require('node-fetch')
var artigo = require('./artigo')
var produto = require('./produto')

exports.getProduto = async (req, res) => {
    const produtoSolicitado = `${req.body.produto}`
    const tipoProduto = await produto.produtoFunction(produtoSolicitado)
    const artigos = await artigo.artigoFunction(tipoProduto, 0, 0)
    res.send(artigos)
}

exports.getDetalhe = async (req, res) => {
    const cores = `${req.body.cor}`
    const generos = `${req.body.genero}`
    const produtoSolicitado = `${req.body.produto}`
    const tipoProduto = await produto.produtoFunction(produtoSolicitado)
    const artigos = await artigo.artigoFunction(tipoProduto, cores, generos)
    res.send(artigos)
}