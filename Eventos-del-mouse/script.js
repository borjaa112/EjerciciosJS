let ul = document.querySelector('#ul');

ul.onclick = colorear;
ul.onmousedown = mousePrevent;

function mousePrevent(event){
    return event.preventDefault();
}

function colorear(event){
    if(event.target.tagName.toLowerCase() !== 'li'){
        return
    }

    if(event.ctrlKey){
        event.target.classList.add("selected");
    }
    if(!event.ctrlKey){
        for (let li of ul.children){
            li.classList.remove('selected');
            event.target.classList.add('selected')
        }
    }
}