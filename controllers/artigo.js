module.exports = {
    artigoFunction: async function (produto, cor, genero) {
        var mocassim = {
            id: 550939258,
            produto: 'MOCASSIM EM COURO NOBUCK',
            cor: 'marrom',
            genero: 'masculino',
            image: 'https://img.lojasrenner.com.br/item/550939291/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/mocassim-masculino-em-couro-nobuck/-/A-550939215-br.lr?sku=550939258',
            preco: '99,90'
        }

        var sapatenis = {
            id: 550944313,
            produto: 'SAPATÊNIS CASUAL EM COURO',
            cor: 'marrom',
            genero: 'masculino',
            image: 'https://img.lojasrenner.com.br/item/550944381/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/sapatenis-masculino-casual-em-couro/-/A-550944292-br.lr?sku=550944313',
            preco: '139,90'
        }

        var tenis = [{
            id: 551210080,
            produto: 'TÊNIS SLIP ON DETALHE EM COBRA',
            cor: 'rosa',
            genero: 'feminino',
            imagem: 'https://img.lojasrenner.com.br/item/551210098/small/1.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-feminino-slip-on-detalhe-em-cobra/-/A-551210047-br.lr?sku=551210080',
            preco: '99,90'
        },
        {
            id: 550905429,
            produto: 'TÊNIS COM SOLA ALTA',
            cor: 'verde',
            genero: 'feminino',
            image: 'https://img.lojasrenner.com.br/item/550905429/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-feminino-com-sola-alta/-/A-550905373-br.lr?sku=550905437',
            preco: '139,90'
        },
        {
            id: 551514454,
            produto: 'TÊNIS SNEAKER',
            cor: 'preto',
            genero: 'masculino',
            image: 'https://img.lojasrenner.com.br/item/551514471/small/1.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-masculino-sneaker/-/A-551514446-br.lr?sku=551514454',
            preco: '159,90'
        },
        {
            id: 550066004,
            produto: 'TÊNIS ABOTINADO COM CORAÇÕES',
            cor: 'preto',
            genero: 'infantil',
            image: 'https://img.lojasrenner.com.br/item/548714682/small/1.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-infantil-abotinado-com-coracoes-tam-28-ao-35/-/A-548714607-br.lr?sku=548714631',
            preco: '49,90'
        },
        {
            id: 550455413,
            produto: 'TÊNIS COM SALTO E BRILHOS',
            cor: 'preto',
            genero: 'feminino',
            image: 'https://img.lojasrenner.com.br/item/551518711/small/1.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-feminino-com-salto-e-brilhos/-/A-551518666-br.lr?sku=551518674',
            preco: '169,90'
        },
        {
            id: 549149056,
            produto: 'TÊNIS SLIP ON EM COURO VIKO',
            cor: 'preto',
            genero: 'masculino',
            image: 'https://img.lojasrenner.com.br/item/549149030/small/1.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-masculino-slip-on-em-couro-viko/-/A-549149005-br.lr?sku=549149064',
            preco: '119,90'
        },
        {
            id: 548003080,
            produto: 'TÊNIS RUNNING VIKO',
            cor: 'marrom',
            genero: 'masculino',
            image: 'https://img.lojasrenner.com.br/item/548003055/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-masculino-running-viko/-/A-548003021-br.lr?sku=548003071',
            preco: '119,90'
        },
        {
            id: 550945017,
            produto: 'TÊNIS JOGGING',
            cor: 'preto',
            genero: 'masculino',
            imagem: 'https://img.lojasrenner.com.br/item/550945033/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-masculino-jogging/-/A-550944962-br.lr?sku=550945017',
            preco: '119,90'
        },
        {
            id: 550947266,
            produto: 'TÊNIS CASUAL EM COURO',
            cor: 'branco',
            genero: 'masculino',
            image: 'https://img.lojasrenner.com.br/item/550947282/small/1.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-masculino-casual-em-couro/-/A-550947207-br.lr?sku=550947266',
            preco: '119,90'
        }]

        if (produto == 'mocassim') {
            var itemMocassim = ''
            if (cor == mocassim.cor || genero == mocassim.genero) {
                return itemMocassim = mocassim
            } else
                return 'produto indisponível'
        } else if (produto == 'sapatenis') {
            var itemSapatenis = ''
            if (cor == sapatenis.cor || genero == sapatenis.genero) {
                return itemSapatenis = sapatenis
            } else
                return 'produto indisponível'
        } else if (produto == 'tenis') {
            var arrayTenis = []
            for (var i = 0; i <= produto.length; i++) {
                if (cor == tenis[i].cor || genero == tenis[i].genero) {
                    arrayTenis[i] = tenis[i]
                }
            }
            var itemTenis = arrayTenis.filter(function (el) {
                return el != null
            })
            if (Array.isArray(itemTenis) && itemTenis.length) {
                return itemTenis
            } else
                return 'produto indisponível'
        } else {
            return "produto não encontrado"
        }
    }
}