let form = document.body.querySelector("#genres")

let seleccionados = Array.from(form.options);

for (let seleccionado of seleccionados){
    if (seleccionado.selected === true){
        alert(seleccionado.value);
    }
}

let opcion = new Option("Opcion", "Opcion", true, true);

form.append(opcion);