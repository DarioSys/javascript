// Selecciono el contenedor titulos que es hijo del div contenedor.
const div = document.getElementById('titulos');

// Accedo al padre del elemento div titulos.
console.log(div.parentNode); 

// Imprimo el nombre del nodo padre.
console.log(div.parentNode.nodeName);

// Imprimo el tipo de nodo padre.
console.log(div.parentNode.nodeType);

// Imprimo en el documento.
const out1 = document.getElementById('out1');
out1.innerHTML = div.parentNode;

const out2 = document.getElementById('out2');
out2.innerHTML = div.parentNode.nodeName;

const out3 = document.getElementById('out3');
out3.innerHTML = div.parentNode.nodeType;


