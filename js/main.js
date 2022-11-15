const botao = document.querySelector('#botao');

botao.addEventListener('click', function (event) {
    event.defaultPrevented();

    console.log(dados());
})

function dados () {
    const nome    = document.querySelector('#nome');
    const tamanho = document.querySelector('#tamanho');
    const cor     = document.querySelector('#cor')
}
