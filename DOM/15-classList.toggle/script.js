// Selecciono el elemento h1
const h1 = document.getElementById('titulo');

//Imprimo por consola
console.log(h1);

alert("Abrí la consola del navegador con click derecho inspeccionar");

let a = prompt("Presione una tecla");

while (a) {

    let removerClase = prompt("Ingrese el valor 0 para añadir o eliminar la clase del elemento H1 o presione la letra q para salir");

    if (removerClase == 0){
        // Remuevo la clase del elemento h1
        h1.classList.toggle('ClaseH');
        //Imprimo por consola
        console.log(h1); 
    } else if (removerClase == "q"){
        break      
    } else {
        alert("El valor ingresado no es un 0"); 
    }
}

alert("Adios que tengas un buen día");
alert("Refresca el navegador para volver a empezar");





