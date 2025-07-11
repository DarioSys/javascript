//Selecciono el elemento H1
const h1 = document.getElementById('titulo');

const p = document.getElementsByTagName('p');

//Muestro por consola el elemento h1
console.log(h1);
console.log(p);

//Muestro por el navegador 
h1.id = "nuevoId"; 
p[0].id = "soyUnP";

console.log(h1);
console.log(p);



