//Selecciono el elemento H1
const element = document.getElementById('h1');
const element2 = document.getElementById('pa');
//Muestro por consola el elemento h1
console.log(element);
console.log(element2);
//Muestro por el navegador 
element.outerHTML = "Soy un elemento h1";  // Remplazo el h1 por este texto
element2.outerHTML = "<h1>Soy otro h1</>"; // Remplazo el <p>  por un <h1>




