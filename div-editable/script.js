let div = document.body.querySelector("#view");

div.onclick = toTextArea;

let textarea = document.createElement("textarea");

function toTextArea(event){
    event.target.replaceWith(textarea);
    area = document.body.querySelector("textarea");
    area.classList.add("edit");
    isFocus();
}


function isFocus(){
    area.onblur = cambiar;
    area.onkeydown = checkEnter;
    function cambiar(event){
        contenido = area.value;
        area.replaceWith(div);
        div.innerHTML = (contenido);
    }

    function checkEnter(event){
        if(event.key === "Enter"){
            cambiar();
        }
    }
}
