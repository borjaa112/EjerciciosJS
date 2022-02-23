let miniaturas = document.body.querySelector('#thumbs');
miniaturas.onclick = cambiarImg;

function cambiarImg(event) {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
        let imagen = document.body.querySelector('#largeImg');
        imagen.src = event.target.closest('a').href;
    }
}