let usuarios = [
    { nombre: "Juan", apellido: "Garcia", edad: 23, altura: 1.7 },
    { nombre: "Andrés", apellido: "Martínez", edad: 18, altura: 1.77 },
    { nombre: "Carlos", apellido: "Martínez", edad: 56, altura: 1.73 },
    { nombre: "María", apellido: "Ortega", edad: 23, altura: 1.79 },
    { nombre: "Ana", apellido: "Perez", edad: 45, altura: 1.7 },
    { nombre: "Alberto", apellido: "García", edad: 46, altura: 1.75 },
    { nombre: "Julia", apellido: "Perez", edad: 23, altura: 1.65 },
    { nombre: "Maica", apellido: "Perez", edad: 52, altura: 1.63 },
    { nombre: "Juan", apellido: "García", edad: 61, altura: 1.85 },
    { nombre: "Ana", apellido: "Luján", edad: 60, altura: 1.9 },
    { nombre: "Juan", apellido: "Gutiérrez", edad: 34, altura: 1.75 },
];

function filterLessThanAge(arr, edad) {
    let usuarios = [];
    for (let usuario of arr) {
        if (usuario.edad <= edad) {
            usuarios.push(usuario);
        }
    }
    return usuarios;
}

console.log(filterLessThanAge(usuarios, 26));
