let btn = document.body.querySelector("button");

function showCircle(cx, cy, radius) {
    let promesa = new Promise(function(resolve){
        let div = document.createElement('div');
        div.style.width = 0;
        div.style.height = 0;
        div.style.left = cx + 'px';
        div.style.top = cy + 'px';
        div.className = 'circle';
        document.body.append(div);
    
        setTimeout(() => {
          div.style.width = radius * 2 + 'px';
          div.style.height = radius * 2 + 'px';
          
          div.addEventListener('transitionend', function handler() {
            div.removeEventListener('transitionend', handler);
            resolve(div);
          });
        }, 0);
    
    })
    return promesa;
  }

btn.onclick = () => showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hola, mundo!");
  });