let uno = document.body.querySelectorAll('.div-1');
let dos = document.body.querySelectorAll('.div-2')
let tres = document.body.querySelector('.div-3');

//handler 1
for (let div of uno){
    div.onclick = changeColorOne;
}

function changeColorOne(event){
    this.style.backgroundColor = "red";
    event.stopPropagation();
}

//handler 2
for (let div2 of dos){
    div2.onclick = setBorderTwo;
}
function setBorderTwo(){
    this.style.borderStyle = "dashed";
}

//handler 3
tres.onclick = changeColorThree;

function changeColorThree(event){
    if(event.target !== event.currentTarget){
        event.target.style.backgroundColor = "pink";
    }
}