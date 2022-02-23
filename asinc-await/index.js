async function loadJson(url) {
    let respuesta = await fetch(url);

    if(respuesta.status == 200){
        return await respuesta.json();
    }
    throw new Error(respuesta.status);
  }
  
loadJson('no-such-user.json').catch(alert);