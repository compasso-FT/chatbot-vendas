const fetch = require('node-fetch')

exports.getProduto = async(req, res) => {
    res.send("produto")
}

exports.getDetalhe = async(req, res) => {
    res.send("detalhe")
}

exports.getTamanho = async(req, res) => {
    res.send("tamanho")
}