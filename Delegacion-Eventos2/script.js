let tree = document.body.querySelector('.tree');

tree.onclick = ocultarHijos;

function ocultarHijos(event) {
    if(event.target.tagName.toLowerCase() === "span"){
        let li = event.target.closest('li');
        let ul = li.querySelector("ul");
        ul.hidden = !ul.hidden;
    }

}