const botao = document.querySelector('#botao');

botao.addEventListener('click', function (event) {
    event.defaultPrevented();

    window.location.href = "../restuldos.html"
})
