

let url = [
    'https://randomuser.me/api',
    'https://randomuser.me/api',
    'https://randomuser.me/api'
];

let peticiones = url.map(result => fetch(result).then(response => response.json()));

Promise.all(peticiones).then(
    (usuarios) => {
        for (let usuario of usuarios){
            let contenido = usuario.results[0];
            
            let bienvenido = document.createElement("h1");
            let nombre = contenido.name.first + " " + contenido.name.last;
            if(contenido.gender === "male"){
                bienvenido.textContent = "Bienvenido "+nombre;
            }else{
                bienvenido.textContent = "Bienvenida "+nombre;
            }
            document.body.append(bienvenido);

            let correo = document.createElement("p");
            correo.textContent = contenido.email;
            document.body.append(correo);


            let imagen = document.createElement("img");
            imagen.src = contenido.picture.large;
            document.body.append(imagen);
        }
    }
)