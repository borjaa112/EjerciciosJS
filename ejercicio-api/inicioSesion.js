if(localStorage.getItem("correo") !== null){
    window.location.href = "http://127.0.0.1:5500/inicio.html";
}


let loginBtn = document.body.querySelector("#login");

loginBtn.onclick = function(){
    let correo = document.body.querySelector("#email").value;
    localStorage.setItem("correo", correo);
    window.location.href = "http://127.0.0.1:5500/inicio.html";
}