
// Selecciono el contenedor div titulos
const div = document.getElementById('titulos');

// Accedo al ultimo hijo del elemento div titulos.
console.log(div.nextSibling); 

// Imprimo el nombre del nodo 
console.log(div.nextSibling.nodeName);

// Imprimo el tipo de nodo 
console.log(div.nextSibling.nodeType);

// Imprimo en el documento.
const out1 = document.getElementById('out1');
out1.innerHTML = div.nextSibling;

const out2 = document.getElementById('out2');
out2.innerHTML = div.nextSibling.nodeName;

const out3 = document.getElementById('out3');
out3.innerHTML = div.nextSibling.nodeType;





