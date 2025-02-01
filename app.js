// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


//funcion limpiar caja
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//Agregar amigo
function agregarAmigo(){
    if(!document.querySelector('#amigo').value){
        alert('¡Nombre invalido!')
    }else{
    amigos.push(document.querySelector('#amigo').value)
    console.log(amigos)
    limpiarCaja()
    }
}
