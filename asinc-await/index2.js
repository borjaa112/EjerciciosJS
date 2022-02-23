class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let respuesta = await fetch(url);
    console.log(respuesta.status);
    if (respuesta.status == 200) {
        console.log("jajaj");
        //no hace falta await porque la promesa se resolverá abajo en la llamada
        return respuesta.json();
    }
    throw new HttpError(respuesta);
}

// Pide nombres hasta que github devuelve un usuario válido
async function demoGithubUser() {
    try {
        let name = prompt("Ingrese un nombre:", "iliakan");

        let user = await loadJson(`https://api.github.com/users/${name}`);
        //alert(user.name);
        console.log(user.name);
        return user;
    }
    catch(e){
        if (e instanceof HttpError && (e.response.status == 404 || e.response.status === 403)) {
            alert("No existe tal usuario, por favor reingrese.");
        }
    };
}

demoGithubUser().then(alert);