let container = document.body;

container.onclick = cerrarventana;

function cerrarventana(event){
    console.log(event.target.classList.contains('remove-button'));
    if(event.target.classList.contains('remove-button')){
        event.target.closest('div').remove();
    }
}