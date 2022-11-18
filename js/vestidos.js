function vestidos (tamanho, cor) {
    const vestidos = [
        {
            id: 1,
            vestidoLiso: "./assets/img/vestidos/verdePLiso",
            vestidoBordado: "./assets/img/vestidos/verdePBordado",
            tamanho: 38,
            cor: "verde",
        }, {
            id: 2,
            vestidoLiso: "./assets/img/vestidos/azulPLiso",
            vestidoBordado: "./assets/img/vestidos/azulPBordado",
            tamanho: 38,
            cor: "azul",
        }, {
            id: 3,
            vestidoLiso: "./assets/img/vestidos/vermelhoPLiso",
            vestidoBordado: "./assets/img/vestidos/vermelhoPBordado",
            tamanho: 38,
            cor: "vermelho",
        }, {
            id: 4,
            vestidoLiso: "./assets/img/vestidos/verdeMLiso",
            vestidoBordado: "./assets/img/vestidos/verdeMBordado",
            tamanho: 42,
            cor: "verde",
        }, {
            id: 5,
            vestidoLiso: "./assets/img/vestidos/azulMLiso",
            vestidoBordado: "./assets/img/vestidos/azulMBordado",
            tamanho: 42,
            cor: "azul",
        }, {
            id: 6,
            vestidoLiso: "./assets/img/vestidos/vermelhoMLiso",
            vestidoBordado: "./assets/img/vestidos/vermelhoMBordado",
            tamanho: 42,
            cor: "vermelho",
        }, {
            id: 7,
            vestidoLiso: "./assets/img/vestidos/verdeGLiso",
            vestidoBordado: "./assets/img/vestidos/verdeGBordado",
            tamanho: 46,
            cor: "verde",
        }, {
            id: 8,
            vestidoLiso: "./assets/img/vestidos/azulGLiso",
            vestidoBordado: "./assets/img/vestidos/azulGBordado",
            tamanho: 46,
            cor: "azul",
        }, {
            id: 9,
            vestidoLiso: "./assets/img/vestidos/vermelhoGLiso",
            vestidoBordado: "./assets/img/vestidos/vermelhoGBordado",
            tamanho: 46,
            cor: "vermelho",
        } 
    ]

    const pesquisa  = vestidos.find( vestido => vestido.tamanho == tamanho && vestido.cor == cor)
    
    if (typeof pesquisa == 'object') {
        const resultado = [pesquisa.vestidoLiso, pesquisa.vestidoBordado] 
        return resultado 
    } else {
        const resultado2 = "undefined"
        return resultado2 
    }
}

function addVestido (vestido) {
    const divLiso = document.querySelector('#imagem__liso');
    const imgLiso = document.createElement('img');

    const divBordado = document.querySelector('#imagem__bordado');
    const imgBordado = document.createElement('img');

    const liso    = vestido[0];
    const bordado = vestido[1]; 
    
}
