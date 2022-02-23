let correo = localStorage.getItem("correo");
let bienvenido = document.body.querySelector("#bienvenido")
if(correo === null){
    bienvenido.textContent = "No tienes permiso para ver esta web";
}else{
    bienvenido.textContent = "Bienvenido "+correo;

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

