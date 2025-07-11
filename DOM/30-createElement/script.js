// Creo un elemento p vacio.
const parrafo = document.createElement('p');
// Imprimo por consola el elemento p.
console.log(parrafo);
// Creo un texto y lo almaceno 
const texto = document.createTextNode('soy un texto creado');
// Imprimo por consola el texto.
console.log(texto);
// Añado el texto al parrafo
parrafo.appendChild(texto);
// Selecciono el div
const div = document.getElementById('agregar');
// Añado el parrafo al DIV.
div.appendChild(parrafo);



