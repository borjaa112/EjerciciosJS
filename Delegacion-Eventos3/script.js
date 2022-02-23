let personas = [
    { age: 5, name: "John" },
    { age: 2, name: "Pete" },
    { age: 12, name: "Ann" },
    { age: 9, name: "Eugene" },
    { age: 1, name: "Ilya" },
];

function pintarTabla(arr = personas) {
    let tbody = document.querySelector('tbody');
    tbody.textContent = "";
    for (let persona of arr) {
        let tr = document.createElement('tr');
        let edad = document.createElement('td');
        edad.textContent = persona.age;
        let name = document.createElement('td');
        name.textContent = persona.name;

        //inserciones
        tbody.append(tr);
        tr.append(edad);
        tr.append(name);
    }
}
pintarTabla();

//eventos

let edad = document.querySelector('#edad');
edad.onclick = sortByAge;

let nombre = document.querySelector('#nombre');
nombre.onclick = sortByName;

function sortByAge(event) {
    function ordenar(a, b) {
        if (a.age < b.age) {
            return -1;
        }
        if(a.age > b.age){
            return 1;
        }
        if(a.age === b.age){
            return 0;
        }
    }
    let tempArr = [];
    tempArr = personas.sort(ordenar);
    console.log(tempArr);
    pintarTabla(tempArr);
}

function sortByName(event) {
    function ordenar(a,b){
        //if()
    }
    let tempArr = [];
    tempArr = personas.sort(ordenar);
    console.log(tempArr);
    pintarTabla(tempArr);
}
