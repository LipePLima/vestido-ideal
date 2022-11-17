const botao = document.querySelector('#botao');

botao.addEventListener('click', function (event) {
    event.preventDefault();

    const formulario = document.querySelector('#form');
    const nome       = document.querySelector('#nome').value;
    const tamanho    = document.querySelector('#tamanho').value;
    const cor        = document.querySelector('#cor').value.toLowerCase();
    const vestido    = vestidos(tamanho, cor)
    const erros      = validaForm(nome, tamanho, cor, vestido);
    
    if (erros.length > 0) {
        exibeMensagensErro(erros)
        return;
    }

    exibeMensagensErro(erros);
    apresentacao(nome);
    console.log(vestido)

    formulario.reset();
})

function apresentacao (nome) {
    const paragrafo = document.querySelector('#apresentacao');
    
    if (nome.length > 0) {
        paragrafo.textContent = `Olá, ${nome}. Aqui está o tão esperado vestido ideal. `
    }     
}

function vestidos (tamanho, cor) {
    const vestidos = [
        {
            id: 1,
            vestidoLiso: "./assets/img/vestidos/verdePLiso",
            vestidoBordado: "./assets/img/vestidos/verdePBordado",
            tamanho: 36,
            cor: "verde",
            tipo: "liso"
        }, {
            id: 2,
            vestido: "#",
            tamanho: 40,
            cor: "azul",
            tipo: "bordado"
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
