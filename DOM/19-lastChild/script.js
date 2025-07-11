// Selecciono el contenedor div titulos
const div = document.getElementById('titulos');

// Accedo al ultimo hijo del elemento div titulos.
console.log(div.lastChild); 

// Imprimo el nombre del nodo hijo.
console.log(div.lastChild.nodeName);

// Imprimo el tipo de nodo hijo.
console.log(div.lastChild.nodeType);

// Imprimo en el documento.
const out1 = document.getElementById('out1');
out1.innerHTML = div.lastChild;

const out2 = document.getElementById('out2');
out2.innerHTML = div.lastChild.nodeName;

const out3 = document.getElementById('out3');
out3.innerHTML = div.lastChild.nodeType;



