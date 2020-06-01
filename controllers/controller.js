const fetch = require('node-fetch')
var artigo = require('./artigo')
var produto = require('./produto')

exports.getProduto = async (req, res) => {
    const produtoSolicitado = `${req.body.produto}`
    const tipoProduto = await produto.produtoFunction(produtoSolicitado)
    const artigos = await artigo.artigoFunction(tipoProduto, 0, 0, 0)
    res.send(artigos)
}

exports.getDetalhe = async (req, res) => {
    const cores = `${req.body.cor}`
    const generos = `${req.body.genero}`
    const produtoSolicitado = `${req.body.produto}`
    const tipoProduto = await produto.produtoFunction(produtoSolicitado)
    const artigos = await artigo.artigoFunction(tipoProduto, cores, generos, 0)
    res.send(artigos)
}

exports.getId = async (req, res) => {
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key)) {
            id = req.body[key]
        }
    }
    const artigos = await artigo.artigoFunction(0, 0, 0, id)
    res.send(artigos)
}