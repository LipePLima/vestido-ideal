function vestidos (tamanho, cor) {
    const vestidos = [
        {
            id: 1,
            vestidoLiso: "assets/img/vestidos/verdePLiso.jpg",
            vestidoBordado: "assets/img/vestidos/verdePBordado.jpg",
            tamanho: 38,
            cor: "verde",
        }, {
            id: 2,
            vestidoLiso: "assets/img/vestidos/azulPLiso.jpg",
            vestidoBordado: "assets/img/vestidos/azulPBordado.jpg",
            tamanho: 38,
            cor: "azul",
        }, {
            id: 3,
            vestidoLiso: "assets/img/vestidos/vermelhoPLiso.jpg",
            vestidoBordado: "assets/img/vestidos/vermelhoPBordado.jpg",
            tamanho: 38,
            cor: "vermelho",
        }, {
            id: 4,
            vestidoLiso: "assets/img/vestidos/verdeMLiso.jpg",
            vestidoBordado: "assets/img/vestidos/verdeMBordado.jpg",
            tamanho: 42,
            cor: "verde",
        }, {
            id: 5,
            vestidoLiso: "assets/img/vestidos/azulMLiso.jpg",
            vestidoBordado: "assets/img/vestidos/azulMBordado.jpg",
            tamanho: 42,
            cor: "azul",
        }, {
            id: 6,
            vestidoLiso: "assets/img/vestidos/vermelhoMLiso.jpg",
            vestidoBordado: "assets/img/vestidos/vermelhoMBordado.jpg",
            tamanho: 42,
            cor: "vermelho",
        }, {
            id: 7,
            vestidoLiso: "assets/img/vestidos/verdeGLiso.jpg",
            vestidoBordado: "assets/img/vestidos/verdeGBordado.jpg",
            tamanho: 46,
            cor: "verde",
        }, {
            id: 8,
            vestidoLiso: "assets/img/vestidos/azulGLiso.jpg",
            vestidoBordado: "assets/img/vestidos/azulGBordado.jpg",
            tamanho: 46,
            cor: "azul",
        }, {
            id: 9,
            vestidoLiso: "assets/img/vestidos/vermelhoGLiso.jpg",
            vestidoBordado: "assets/img/vestidos/vermelhoGBordado.jpg",
            tamanho: 46,
            cor: "vermelho",
        } 
    ]

    const pesquisa = vestidos.find( vestido => vestido.tamanho == tamanho && vestido.cor == cor)
    
    if (typeof pesquisa == 'object') {
        const resultado = [pesquisa.vestidoLiso, pesquisa.vestidoBordado] 
        return resultado 
    } else {
        const resultado2 = "undefined"
        return resultado2 
    }
}

function addVestido (vestido) {
    const divLiso    = document.querySelector('#imagem__liso');
    const divBordado = document.querySelector('#imagem__bordado');
    const existimg   = document.querySelector('.imagem');
    console.log(existimg)

    if (!existimg == 'null') {
        divLiso.removeChild(existimg[0])
        divBordado.removeChild(existimg[1])
    } 

    const imgLiso = document.createElement('img');
    imgLiso.classList.add('imagem')
    imgLiso.src = vestido[0]

    divLiso.appendChild(imgLiso)

    const imgBordado = document.createElement('img');
    imgBordado.classList.add('imagem')
    imgBordado.src = vestido[1]

    divBordado.appendChild(imgBordado)

}
