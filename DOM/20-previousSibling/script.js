// Selecciono el contenedor div titulos
const div = document.getElementById('titulos');

// Accedo al ultimo hijo del elemento div titulos.
console.log(div.previousSibling); 

// Imprimo el nombre del nodo 
console.log(div.previousSibling.nodeName);

// Imprimo el tipo de nodo 
console.log(div.previousSibling.nodeType);

// Imprimo en el documento.
const out1 = document.getElementById('out1');
out1.innerHTML = div.previousSibling;

const out2 = document.getElementById('out2');
out2.innerHTML = div.previousSibling.nodeName;

const out3 = document.getElementById('out3');
out3.innerHTML = div.previousSibling.nodeType;



