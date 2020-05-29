const fetch = require('node-fetch')
var produto = require('./produto')
var detalhe = require('./detalhe')
var id = require('./id')
var tamanho = require('./tamanho')

exports.getProduto = async(req, res) => {
    const produto = `${req.body.produto}`
    res.send(produto)
}

exports.getDetalhe = async(req, res) => {
    const detalhe = `${req.body.detalhe}`
    res.send(detalhe)
}

exports.getTamanho = async(req, res) => {
    const tamanho = `${req.body.tamanho}`
    res.send(tamanho)
}