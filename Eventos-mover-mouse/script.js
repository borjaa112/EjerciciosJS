let caja = document.querySelector('#caja');
let textarea = document.body.querySelector('#texto');
caja.onmouseover = mouseOutOver;
caja.onmouseout = mouseOutOver;

function mouseOutOver(event){
    textarea.textContent += event.type+"\t target: "+event.target.tagName+"\t relatedTarget "+event.relatedTarget.tagName+"\n";
    textarea.scrollTop = 1e6;
}

