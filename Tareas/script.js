class Tarea {
    constructor(descripcion, categoria) {
        this.descripcion = descripcion;
        this.categoria = categoria;
    }

}


class ListaDeTareas {
    tareas = [
        new Tarea("Poner la lavadora", "Hogar"),
        new Tarea("Lavar el coche", "Hogar"),
        new Tarea("Estudiar examen JavaScript", "Estudio"),
        new Tarea("Hacer los deberes", "Estudio"),
        new Tarea("Fregar la habitación", "Hogar"),
        new Tarea("Hacer la cama", "Hogar"),
        new Tarea("Limpiar el Hogar", "Hogar")
    ];
    _getFiltered() {
        //let filteredArray = [... this.tareas];
        let filteredArray = [];
        if (this._filterText === "") {
            return this.tareas;
        }

        for (let tarea of this.tareas) {
            if (tarea.descripcion.toLocaleLowerCase().includes(this._filterText.toLocaleLowerCase()) ||
                tarea.categoria.toLocaleLowerCase().includes(this._filterText.toLocaleLowerCase())) {

                let valor = tarea.descripcion.replaceAll(this._filterText, "<mark>" + this._filterText + "</mark>");
                //console.log(valor);
                let categoria = tarea.categoria.replaceAll(this._filterText, "<mark>" + this._filterText + "</mark>");


                //console.log(tarea);
                let tareaq = new Tarea(valor, categoria);
                filteredArray.push(tareaq);
            }
        }
        console.log(filteredArray);
        return filteredArray;

    }
    _filterText = "";
    filter(text) {
        this._filterText = text;
    }
    genHTML() {
        let tareas = document.body.querySelector('#tareas');
        while (tareas.children.length > 0) {
            tareas.firstElementChild.remove();
        }
        let ol = document.createElement('ol');
        tareas.append(ol);

        for (let tarea of this._getFiltered()) {
            let li = document.createElement('li');
            li.innerHTML = tarea.descripcion + " [" + tarea.categoria + "] " + '<button id="remove" onclick="remove(event)">x</button>';
            ol.append(li);
        }
    }
    crearTarea(descripcion, categoria) {
        let tarea = new Tarea(descripcion, categoria);
        this.tareas.push(tarea);
    }

    borrarTarea(num) {
        this.tareas.splice(num - 1, 1);
    }
}
let tareas = new ListaDeTareas;

function addFromButton(event) {
    let texto = document.querySelector('#input-add').value;
    let tarea = texto.split("[");
    tareas.crearTarea(tarea[0].trim(), tarea[1].replace("]", ""));
}

setInterval(() => tareas.genHTML(), 500);
tareas.crearTarea("Fregar el suelo", "Hogar");

tareas.filter("");

let buttonAdd = document.body.querySelector('#button-add');
buttonAdd.onclick = addFromButton;

let buttonRemove = document.body.querySelector("#remove");

function remove(event) {
    cont = 0;
    descripcion = event.target.parentElement.textContent.split('[');
    descripcion = descripcion[0].trim();
    for (tarea of tareas.tareas) {
        cont++;
        if (tarea.descripcion === descripcion) {
            console.log("a");
            tareas.borrarTarea(cont);
        }
    }
}

let busqueda = document.body.querySelector('#button-filter');
busqueda.onclick = filterByButton;

function filterByButton(event){
    let texto = document.body.querySelector('#filter');
    texto = texto.value;

    tareas.filter(texto)
}

/*for (let a of tareas.tareas){
    console.log(a.replace("a", "quitar"))
}*/
//console.log(tareas.tareas[0].replace("Poner", "quitar"))
