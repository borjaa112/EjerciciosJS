let conejo = document.body.querySelector("pre");

conejo.tabIndex = 1;
conejo.onclick = recogerDatos;
console.log(conejo.getBoundingClientRect());
conejo.style.position = "absolute";

conejo.style.top = conejo.getBoundingClientRect().top;
conejo.style.left = conejo.getBoundingClientRect().left;

let altura, izquierda;

function recogerDatos(event){
    altura = this.offsetHeight;
    izquierda = this.offsetLeft;

    this.onfocus = desplazar;
    console.log(this);
}

function desplazar(event){
    conejo.style.top = 456;
}