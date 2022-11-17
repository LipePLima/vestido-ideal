function validaForm (nome, tamanho, cor, vestido) {
    const erro = [];

    if (nome.length === 0) {
        erro.push("Preencha o campo Nome")
    }
    
    if (tamanho.length === 0) {
        erro.push("Preencha o campo Tamanho")
    }
    
    if (cor.length === 0) {
        erro.push("Preencha o campo Cor")
    }

    if (vestido == "undefined") {
        erro.push("Tamanho ou cor indisponível")
    }

    return erro
}

function exibeMensagensErro (erros) {
    const ul   = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';

    erros.forEach(erro => {
        const li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
    });
}
