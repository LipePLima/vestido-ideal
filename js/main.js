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
    const div       = document.querySelector('#apresentacao');
    const paragrafo = document.createElement('p');

    paragrafo.classList.add('apresentacao__paragrafo');
    div.appendChild(paragrafo);
    
    if (nome.length > 0) {
        paragrafo.textContent = `Olá, ${nome}. Aqui está o tão esperado vestido ideal. `
    }     
}

function vestidos (tamanho, cor) {
    const vestidos = [
        {
            id: 1,
            vestido: "#",
            tamanho: 36,
            cor: "verde",
            tipo: "bordado"
        }, {
            id: 2,
            vestido: "#",
            tamanho: 40,
            cor: "azul",
            tipo: "liso"
        }
    ]

    const pesquisa  = vestidos.find( vestido => vestido.tamanho == tamanho && vestido.cor == cor)
    
    if (typeof pesquisa == 'object') {
        const resultado = [pesquisa.vestido, pesquisa.tamanho, pesquisa.cor] 
        return resultado 
    } else {
        const resultado2 = "undefined"
        return resultado2 
    }
}
