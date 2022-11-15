const botao   = document.querySelector('#botao');

botao.addEventListener('click', function (event) {
    event.preventDefault();

    const nome    = document.querySelector('#nome').value;
    const tamanho = document.querySelector('#tamanho').value;
    const cor     = document.querySelector('#cor').value;

    validaForm(tamanho, cor)
    apresentacao(nome)

})

function apresentacao (nome) {
    const div       = document.querySelector('#apresentacao');
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('apresentacao__paragrafo');

    div.appendChild(paragrafo);

    paragrafo.textContent = `Olá, ${nome}. Aqui está o tão esperado vestido ideal. `
}

function validaForm (tamanho, cor) {
    const erro = [];

    
}

function vestidos () {
    const vestidos = [
        
    ]
}
