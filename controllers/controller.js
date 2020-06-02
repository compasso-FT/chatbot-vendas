const fetch = require('node-fetch')
var artigo = require('./artigo')
var regex = require('./regex')

exports.getProduto = async (req, res) => {
    const produtoSolicitado = `${req.body.produto}`
    const tipoProduto = await regex.regexFunction(produtoSolicitado)
    const artigos = await artigo.artigoFunction(tipoProduto, 0, 0, 0)
    res.send(artigos)
}

exports.getDetalhe = async (req, res) => {
    const corSolicitada = `${req.body.cor}`
    const generoSolicitado = `${req.body.genero}`
    const produtoSolicitado = `${req.body.produto}`
    const tipoCor = await regex.regexFunction(corSolicitada)
    const tipoGenero = await regex.regexFunction(generoSolicitado)
    const tipoProduto = await regex.regexFunction(produtoSolicitado)
    const artigos = await artigo.artigoFunction(tipoProduto, tipoCor, tipoGenero, 0)
    res.send(artigos)
}

exports.getId = async (req, res) => {
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key))
            id = req.body[key]
    }
    const artigos = await artigo.artigoFunction(0, 0, 0, id)
    res.send(artigos)
}