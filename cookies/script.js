let area = document.body.querySelector("#area");

area.value = localStorage.getItem("texto");

area.onchange = saveCookie;

function saveCookie(event) {
    localStorage.setItem('texto', area.value);
}

window.onstorage = function(){
    area.value = localStorage.getItem("texto");
}