let formulario = document.body.querySelector("#prompt-form-container");
formulario.hidden = true;


let botonForm = document.body.querySelector("#clickForm");
botonForm.onclick = () => showPrompt("Hola", accionForm);


function showPrompt(html, callback){
    let divOpaco = document.createElement("div");
    divOpaco.id = "cover-div";
    document.body.append(divOpaco);

    formulario.hidden = false;

    let mensaje = document.body.querySelector("#prompt-message");
    mensaje.textContent = html;

    form = document.body.querySelector("#prompt-form");
    formText = form.text;
    formText.focus();
    formulario.onsubmit = (event) => {
        event.preventDefault();
        callback(formText.value);
    }

    cancelBtn = form.cancel;
    cancelBtn.onclick = () => callback(null);
    
    document.onkeydown = function(event){
        if (event.key === "Escape") {
            callback(null);
        }
    }
}


function accionForm(contenido){

    if (contenido === null) {
        limpiar();
        return;
    }
    alert(contenido);
    limpiar();

    function limpiar() {
        formulario.hidden = true;
        let divOpaco = document.body.querySelector("#cover-div");
        divOpaco.remove();
    }
}