module.exports = {
    artigoFunction: async function (produto, cor, genero) {
        var mocassim = {
            id: 550939258,
            produto: 'MOCASSIM EM COURO NOBUCK',
            cor: 'marrom',
            genero: 'masculino',
            preco: '99,90'
        }

        var sapatenis = {
            id: 550944313,
            produto: 'SAPATÊNIS CASUAL EM COURO',
            cor: 'marrom',
            genero: 'masculino',
            preco: '139,90'
        }

        var tenis = [{
            id: 551210080,
            produto: 'TÊNIS SLIP ON DETALHE EM COBRA',
            cor: 'rosa',
            genero: 'feminino',
            preco: '99,90'
        },
        {
            id: 550905429,
            produto: 'TÊNIS COM SOLA ALTA',
            cor: 'verde',
            genero: 'feminino',
            preco: '139,90'
        },
        {
            id: 551514454,
            produto: 'TÊNIS SNEAKER',
            cor: 'preto',
            genero: 'masculino',
            preco: '159,90'
        },
        {
            id: 550066004,
            produto: 'TÊNIS INFANTIL COM DETALHE EM LISTRAS',
            cor: 'colorido',
            genero: 'infantil',
            preco: '49,90'
        },
        {
            id: 550455413,
            produto: 'TÊNIS MEIA KNIT VIZZANO',
            cor: 'preto',
            genero: 'feminino',
            preco: '169,90'
        },
        {
            id: 549149056,
            produto: 'TÊNIS SLIP ON EM COURO VIKO',
            cor: 'preto',
            genero: 'masculino',
            preco: '119,90'
        },
        {
            id: 548003080,
            produto: 'TÊNIS RUNNING VIKO',
            cor: 'marrom',
            genero: 'masculino',
            preco: '119,90'
        },
        {
            id: 550945017,
            produto: 'TÊNIS JOGGING',
            cor: 'preto',
            genero: 'masculino',
            preco: '119,90'
        },
        {
            id: 550947266,
            produto: 'TÊNIS CASUAL EM COURO',
            cor: 'branco',
            genero: 'masculino',
            preco: '119,90'
        }]

        const array = []
        if (produto == 'mocassim') {
            for (var i = 0; i <= produto.length; i++) {
                if (cor == mocassim.cor) {
                    array[i] = mocassim
                }
                if (genero == mocassim.genero)
                    array[i] = mocassim
            }
            return array
        } else if (produto == 'sapatenis') {
            for (var i = 0; i <= produto.length; i++) {
                if (cor == sapatenis.cor) {
                    array[i] = sapatenis
                }
                if (genero == sapatenis.genero)
                    array[i] = sapatenis
            }
            return array
        } else if (produto == 'tenis') {
            for (var i = 0; i <= produto.length; i++) {
                if (cor == tenis[i].cor) {
                    array[i] = tenis[i]
                }
                if (genero == tenis[i].genero)
                    array[i] = tenis[i]
            }
            return array
        } else {
            return "produto não encontrado"
        }
    }
}