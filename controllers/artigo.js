module.exports = {
    artigoFunction: async function (produto) {
        var mocassim = [{
            id: 550939258,
            produto: 'MOCASSIM MASCULINO EM COURO NOBUCK',
            cor: 'marrom',
            preco: '99.90'
        }]

        var sapatenis = [{
            id: 550944313,
            produto: 'SAPATÊNIS MASCULINO CASUAL EM COURO',
            cor: 'marrom',
            preco: '139.90'
        }]

        var tenis = [{
            id: 551210080,
            produto: 'TÊNIS FEMININO SLIP ON DETALHE EM COBRA',
            cor: 'rosa',
            preco: '99.90'
        },
        {
            id: 550905429,
            produto: 'FEMININO COM SOLA ALTA',
            cor: 'verde',
            preco: '139.90'
        },
        {
            id: 551514454,
            produto: 'TÊNIS MASCULINO SNEAKER',
            cor: 'preto',
            preco: '159.90'
        },
        {
            id: 550066004,
            produto: 'TÊNIS INFANTIL COM DETALHE EM LISTRAS',
            cor: 'colorido',
            preco: '49.90'
        },
        {
            id: 550455413,
            produto: 'TÊNIS FEMININO MEIA KNIT VIZZANO',
            cor: 'preto',
            preco: '169.90'
        },
        {
            id: 549149056,
            produto: 'TÊNIS MASCULINO SLIP ON EM COURO VIKO',
            cor: 'preto',
            preco: '119.90'
        },
        {
            id: 548003080,
            produto: 'TÊNIS MASCULINO RUNNING VIKO',
            cor: 'marrom',
            preco: '119.90'
        },
        {
            id: 550945017,
            produto: 'TÊNIS MASCULINO JOGGING',
            cor: 'preto',
            preco: '119.90'
        },
        {
            id: 550947266,
            produto: 'TÊNIS MASCULINO CASUAL EM COURO',
            cor: 'branco',
            preco: '119.90'
        }] 
        
        if (produto == 'mocassim') {
            return mocassim
        } else if (produto == 'sapatenis') {
            return sapatenis
        } else if (produto == 'tenis') {
            return tenis
        } else {
            return "produto não encontrado"
        }
    }
}