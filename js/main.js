const botao = document.querySelector('#botao');

botao.addEventListener('click', function (event) {
    event.preventDefault();

    const nome    = document.querySelector('#nome').value;
    const tamanho = document.querySelector('#tamanho').value;
    const cor     = document.querySelector('#cor').value;
    const erros   = validaForm(nome, tamanho, cor);

    if (erros.length > 0) {
        exibeMensagensErro(erros)
        return;
    }

    apresentacao(nome)
    exibeMensagensErro(erros)

    nome.textContent = ""
    tamanho.textContent = ""
    cor.textContent = ""
})

function apresentacao (nome) {
    const div       = document.querySelector('#apresentacao');
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('apresentacao__paragrafo');

    div.appendChild(paragrafo);

    paragrafo.textContent = `Olá, ${nome}. Aqui está o tão esperado vestido ideal. `
}

function vestidos () {
    const vestidos = [
        {
            'id': 1,
            "vestido": "#",
            "tamanho": "49",
            "cor": "verde",
            "tipo": "bordado"
        }
    ]
}
