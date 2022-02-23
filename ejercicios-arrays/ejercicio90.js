let usuarios = [
    { nombre: "Juan", apellido: "Garcia", edad: 23, altura: 1.7 },
    { nombre: "Andrés", apellido: "Martínez", edad: 18, altura: 1.77 },
    { nombre: "carlos", apellido: "martínez", edad: 56, altura: 1.73 },
    { nombre: "María", apellido: "Ortega", edad: 23, altura: 1.79 },
    { nombre: "Ana", apellido: "Perez", edad: 45, altura: 1.7 },
    { nombre: "Alberto", apellido: "García", edad: 46, altura: 1.75 },
    { nombre: "Julia", apellido: "Perez", edad: 23, altura: 1.65 },
    { nombre: "Maica", apellido: "Perez", edad: 52, altura: 1.63 },
    { nombre: "Juan", apellido: "García", edad: 61, altura: 1.85 },
    { nombre: "Ana", apellido: "Luján", edad: 60, altura: 1.9 },
    { nombre: "Juan", apellido: "Gutiérrez", edad: 34, altura: 1.75 },
];

function normalizeNames(arr) {
    let tempUser = "";
    for (let usuario of arr) {
        //console.log(usuario.nombre[0]);
        if (usuario.nombre[0] !== usuario.nombre[0].toUpperCase()) {
            tempUser = usuario.nombre.slice(0, 1);
            usuario.nombre = tempUser.toLocaleUpperCase() + usuario.nombre.slice(1);
        }
        if (usuario.apellido[0] !== usuario.apellido[0].toUpperCase()) {
            tempUser = usuario.apellido.slice(0, 1);
            usuario.apellido = tempUser.toLocaleUpperCase() + usuario.apellido.slice(1);
        }
    }
}

normalizeNames(usuarios);

console.log(usuarios);