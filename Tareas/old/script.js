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
            li.innerHTML = tarea.descripcion + " [" + tarea.categoria + "]";
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
setInterval(() => tareas.genHTML(), 500);
tareas.crearTarea("Fregar el suelo", "Hogar");

tareas.filter("Hogar");
/*for (let a of tareas.tareas){
    console.log(a.replace("a", "quitar"))
}*/
//console.log(tareas.tareas[0].replace("Poner", "quitar"))
