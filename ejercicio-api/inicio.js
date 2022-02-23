let correo = localStorage.getItem("correo");
let bienvenido = document.body.querySelector("#bienvenido")

let pCorreo = document.body.querySelector("#correoe");
let img = document.body.querySelector("#imagen");
if(correo === null){
    bienvenido.textContent = "No tienes permiso para ver esta web";
}else{
    //bienvenido.textContent = "Bienvenido "+correo;
    fetch('https://randomuser.me/api')
    .then( (response) => response.json())
    
    .then( function(json){
        let contenido = json.results[0];
        let nombre = contenido.name.first + " " + contenido.name.last;
        localStorage.setItem("Nombre", nombre);

        pCorreo.textContent = contenido.email;
        localStorage.setItem("correo", contenido.email);
        img.src = contenido.picture.large;
    })

    let cerrarSesion = document.createElement("button");
    cerrarSesion.textContent = "Cerrar sesión";
    cerrarSesion.id = "cerrarSesion";
    
    document.body.append(cerrarSesion);
    cerrarSesion.onclick = borrarCookie;


    function borrarCookie(event){
        localStorage.removeItem("correo");
        window.location.href = "http://127.0.0.1:5500/inicioSesion.html";
    }
}

