let cuadrado1 = document.querySelector('#cuadrado1');
let cuadrado2 = document.querySelector('#cuadrado2');

cuadrado1.onclick = getCoordenadas;

function getCoordenadas(event) {
    let evento = new CustomEvent('coordenadas', {
        detail: {
            clientX: event.clientX,
            clientY: event.clientY
        }
    });
    //console.log(evento);
    cuadrado2.dispatchEvent(evento);
}


function showInfoHandle(event) {
    const x = event.detail.clientX;
    const y = event.detail.clientY;
    // console.log(x);
    // console.log(y);
    event.target.textContent = "Coordenada X " + x + " Coordenada Y " + y;

}
cuadrado2.addEventListener('coordenadas', showInfoHandle);
