const botao = document.querySelector('#botao');

botao.addEventListener('click', function (event) {
    event.preventDefault();

    const formulario = document.querySelector('#form');
    const paragrafo  = document.querySelector('#apresentacao');
    const nome       = document.querySelector('#nome').value;
    const tamanho    = document.querySelector('#tamanho').value;
    const cor        = document.querySelector('#cor').value.toLowerCase();
    const vestido    = vestidos(tamanho, cor);
    const erros      = validaForm(nome, tamanho, cor, vestido);
 
    if (erros.length > 0) {
        exibeMensagensErro(erros)
        paragrafo.textContent = ''
        return
    }

    if (nome.length > 0) {
        paragrafo.textContent = `Olá, ${nome}. Aqui estão as opções de vestido ideal.`
    }   
    
    exibeMensagensErro(erros);
    addVestido(vestido);

    formulario.reset();
})

