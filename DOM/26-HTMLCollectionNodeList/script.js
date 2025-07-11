// Seleccion del elemento parrafo por su nombre y clase
const p = document.getElementsByTagName('p');               //HTMLCollection

const clase = document.getElementsByClassName('parrafo');   //HTMLCollection

// Seleccion del elemento parrafo por su nombre y clase usando querySelectorAll

const p2 = document.querySelectorAll('p');                  //NodeList

const clase2 = document.querySelectorAll('.parrafo');       //NodeList
   
// Seleccion de los elementos <p> por su id
const op = document.getElementById('out1');
// Acceso al objeto op utilizando propiedad innerHTML para imprimir
op.innerHTML = p;

const oc = document.getElementById('out2'); 
oc.innerHTML= clase;
const op2 = document.getElementById('out3');
op2.innerHTML = p2;
const oc2 = document.getElementById('out4'); 
oc2.innerHTML= clase2;
    
document.write("<br>");

// Imprimiendo usando el metodo document.write.
document.write(p+"<br><br>");
document.write(clase+"<br><br>");
document.write(p2+"<br><br>");
document.write(clase2+"<br>");

//Imprimiendo por consola.
console.log(p);
console.log(clase);
console.log(p2);
console.log(clase2);