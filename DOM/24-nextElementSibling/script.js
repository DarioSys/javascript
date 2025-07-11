
// Selecciono el contenedor div titulos
const div = document.getElementById('titulos');

// Accedo al siguiente elemento
console.log(div.nextElementSibling); 

// Imprimo el nombre del nodo 
console.log(div.nextElementSibling.nodeName);

// Imprimo el tipo de nodo 
console.log(div.nextElementSibling.nodeType);

// Imprimo en el documento.
const out1 = document.getElementById('out1');
out1.innerHTML = div.nextElementSibling;

const out2 = document.getElementById('out2');
out2.innerHTML = div.nextElementSibling.nodeName;

const out3 = document.getElementById('out3');
out3.innerHTML = div.nextElementSibling.nodeType;





