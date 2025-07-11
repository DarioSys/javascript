// Selecciono el contenedor div output
const div = document.getElementsByClassName('output');

// Accedo al anterior elemento 
console.log(div[0].previousElementSibling); 

// Imprimo el nombre del nodo 
console.log(div[0].previousElementSibling.nodeName);

// Imprimo el tipo de nodo 
console.log(div[0].previousElementSibling.nodeType);

// Imprimo en el documento.
const out1 = document.getElementById('out1');
out1.innerHTML = div[0].previousElementSibling;

const out2 = document.getElementById('out2');
out2.innerHTML = div[0].previousElementSibling.nodeName;

const out3 = document.getElementById('out3');
out3.innerHTML = div[0].previousElementSibling.nodeType;



