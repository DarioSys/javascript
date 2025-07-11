// Selecciono el contenedor div titulos
const div = document.getElementById('titulos');

// Accedo al primer hijo del elemento div titulos.
console.log(div.firstChild); 

// Imprimo el nombre del nodo hijo.
console.log(div.firstChild.nodeName);

// Imprimo el tipo de nodo hijo.
console.log(div.firstChild.nodeType);

// Imprimo en el documento.
const out1 = document.getElementById('out1');
out1.innerHTML = div.firstChild;

const out2 = document.getElementById('out2');
out2.innerHTML = div.firstChild.nodeName;

const out3 = document.getElementById('out3');
out3.innerHTML = div.firstChild.nodeType;



