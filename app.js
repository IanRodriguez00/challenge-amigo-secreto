let amigos = [];

//funcion limpiar caja
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//funcion asigna texto a un elemento
function asignarTextoElemento(elemento, contenido) {
    const ul = document.querySelector(elemento);
    ul.innerHTML = ''; 
    if (Array.isArray(contenido)) {
        contenido.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ul.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = contenido;
        ul.appendChild(li);
    }
}

//Agregar amigo
function agregarAmigo(){
    if(!document.querySelector('#amigo').value){
        alert('Por favor, ingrese un nombre valido');
    }else{
        amigos.push(document.querySelector('#amigo').value);
        console.log(amigos);
        limpiarCaja();
        asignarTextoElemento('ul', amigos);
    }
}

//Sortear amigo
function sortearAmigo(){
    if (amigos.length === 0){
        alert('La lista de amigos está vacía');
    }else{
        let numeroAmigo = Math.floor(Math.random() * amigos.length);
        asignarTextoElemento('ul', `¡Tu amigo secreto es ${amigos[numeroAmigo]}!`);
    }
}
