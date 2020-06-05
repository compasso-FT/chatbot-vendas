module.exports = {
    artigoFunction: async function (produtoProd, corProd, generoProd, idProd) {
        var item = [{
            id: 550939258,
            tipo: 'mocassim',
            produto: 'MOCASSIM EM COURO NOBUCK',
            descricao: 'Mocassim em Couro Nobuck',
            cor: 'marrom',
            genero: 'masculino',
            image: 'https://img.lojasrenner.com.br/item/550939291/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/mocassim-masculino-em-couro-nobuck/-/A-550939215-br.lr?sku=550939258',
            preco: '99,90'
        },
        {
            id: 550944313,
            tipo: 'sapatenis',
            produto: 'SAPATÊNIS CASUAL EM COURO',
            descricao: 'Sapatênis Casual em Couro',
            cor: 'marrom',
            genero: 'masculino',
            image: 'https://img.lojasrenner.com.br/item/550944381/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/sapatenis-masculino-casual-em-couro/-/A-550944292-br.lr?sku=550944313',
            preco: '139,90'
        },
        {
            id: 551210080,
            tipo: 'tenis',
            produto: 'TÊNIS SLIP ON DETALHE EM COBRA',
            descricao: 'Tênis Slip On Detalhe em Cobra',
            cor: 'rosa',
            genero: 'feminino',
            image: 'https://img.lojasrenner.com.br/item/551210098/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-feminino-slip-on-detalhe-em-cobra/-/A-551210047-br.lr?sku=551210080',
            preco: '99,90'
        },
        {
            id: 550905429,
            tipo: 'tenis',
            produto: 'TÊNIS COM SOLA ALTA',
            descricao: 'Tênis com Sola Alta',
            cor: 'verde',
            genero: 'feminino',
            image: 'https://img.lojasrenner.com.br/item/550905429/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-feminino-com-sola-alta/-/A-550905373-br.lr?sku=550905437',
            preco: '139,90'
        },
        {
            id: 551514454,
            tipo: 'tenis',
            produto: 'TÊNIS SNEAKER',
            descricao: 'Tênis Sneaker',
            cor: 'preto',
            genero: 'masculino',
            image: 'https://img.lojasrenner.com.br/item/551514471/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-masculino-sneaker/-/A-551514446-br.lr?sku=551514454',
            preco: '159,90'
        },
        {
            id: 548714631,
            tipo: 'tenis',
            produto: 'TÊNIS ABOTINADO COM CORAÇÕES',
            descricao: 'Tênis Abotinado com Corações',
            cor: 'preto',
            genero: 'infantil',
            image: 'https://img.lojasrenner.com.br/item/548714682/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-infantil-abotinado-com-coracoes-tam-28-ao-35/-/A-548714607-br.lr?sku=548714631',
            preco: '49,90'
        },
        {
            id: 551518674,
            tipo: 'tenis',
            produto: 'TÊNIS COM SALTO E BRILHOS',
            descricao: 'Tênis com Salto e Brilhos',
            cor: 'preto',
            genero: 'feminino',
            image: 'https://img.lojasrenner.com.br/item/551518711/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-feminino-com-salto-e-brilhos/-/A-551518666-br.lr?sku=551518674',
            preco: '169,90'
        },
        {
            id: 549149056,
            tipo: 'tenis',
            produto: 'TÊNIS SLIP ON EM COURO VIKO',
            descricao: 'Tênis Slip On em Couro Viko',
            cor: 'preto',
            genero: 'masculino',
            image: 'https://img.lojasrenner.com.br/item/549149030/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-masculino-slip-on-em-couro-viko/-/A-549149005-br.lr?sku=549149064',
            preco: '119,90'
        },
        {
            id: 548003080,
            tipo: 'tenis',
            produto: 'TÊNIS RUNNING VIKO',
            descricao: 'Tênis Running Viko',
            cor: 'marrom',
            genero: 'masculino',
            image: 'https://img.lojasrenner.com.br/item/548003055/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-masculino-running-viko/-/A-548003021-br.lr?sku=548003071',
            preco: '119,90'
        },
        {
            id: 550945017,
            tipo: 'tenis',
            produto: 'TÊNIS JOGGING',
            descricao: 'Tênis Jogging',
            cor: 'preto',
            genero: 'masculino',
            image: 'https://img.lojasrenner.com.br/item/550945033/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-masculino-jogging/-/A-550944962-br.lr?sku=550945017',
            preco: '119,90'
        },
        {
            id: 550947266,
            tipo: 'tenis',
            produto: 'TÊNIS CASUAL EM COURO',
            descricao: 'Tênis Casual em Couro',
            cor: 'branco',
            genero: 'masculino',
            image: 'https://img.lojasrenner.com.br/item/550947282/small/2.jpg',
            url: 'https://www.lojasrenner.com.br/p/tenis-masculino-casual-em-couro/-/A-550947207-br.lr?sku=550947266',
            preco: '119,90'
        }]

        if (idProd.length > 0) {
            var result = []
            for(var i = 0; i < idProd.length; i++) {
                result[i] = item.find(prod => prod.id == idProd[i])
            }
            if (result.length)
                return result
            else
                return 'produto indisponível'
        } else if (corProd == '' && generoProd == '') {
            function filterByProduto(obj) {
                if ('tipo' in obj && obj.tipo == produtoProd) {
                    return true
                } else {
                    return false
                }
            }
            var arrayProduto = item.filter(filterByProduto)
            if (arrayProduto.length)
                return arrayProduto
            else
                return 'produto indisponível'
        } else if (generoProd == '') {
            function filterByCor(obj) {
                if ('cor' in obj && obj.cor == corProd && 'tipo' in obj && obj.tipo == produtoProd) {
                    return true
                } else {
                    return false
                }
            }
            var arrayProduto = item.filter(filterByCor)
            if (arrayProduto.length)
                return arrayProduto
            else
                return 'produto indisponível'
        } else if (corProd == '') {
            function filterByGenero(obj) {
                if ('genero' in obj && obj.genero == generoProd && 'tipo' in obj && obj.tipo == produtoProd) {
                    return true
                } else {
                    return false
                }
            }
            var arrayProduto = item.filter(filterByGenero)
            if (arrayProduto.length)
                return arrayProduto
            else
                return 'produto indisponível'
        } else if (corProd != '' && generoProd != '') {
            function filterByCorGenero(obj) {
                if ('cor' in obj && obj.cor == corProd && 'genero' in obj && obj.genero == generoProd && 'tipo' in obj && obj.tipo == produtoProd) {
                    return true
                } else {
                    return false
                }
            }
            var arrayProduto = item.filter(filterByCorGenero)
            if (arrayProduto.length)
                return arrayProduto
            else
                return 'produto indisponível'
        } else 
            return 'produto não encontrado'
    }
}