// Selecciono el elemento div que es padre de los parrafos.
const div = document.getElementById('eliminar');
// Imprimo por consola 
console.log(div);
// Selecciono el parrafo.
const p = document.getElementsByTagName('p');
// Imprimo por consola 
console.log(p);

let eliminar = prompt("Escriba un numero del 1 al 4 para eliminar un parrafo");

switch(eliminar){
    case "1":
        div.removeChild(p[0]);
        alert("parrafo 1 eliminado");
        break;  
    case "2":
        div.removeChild(p[1]);
         alert("parrafo 2 eliminado");
        break;
    case "3":
        div.removeChild(p[2]);
         alert("parrafo 3 eliminado");
        break;
    case "4":
        div.removeChild(p[3]);
         alert("parrafo 4 eliminado"); 
        break;
    default:
        alert("Ingrese un numero comprendido entre 1 a 4");           
}