
// Creamos un array de dos x dos, con NewArray
let array2x2 = new Array(2); // Se creo un array vacio que ocupa dos elemenos [,]
// Vamos a cargar elemenos en las posiciones de nuestro array vacio.
array2x2[0]=1; //[1,]
array2x2[1]=2; //[1,2]
// Imprimo el array para ver si se cargaron los elemenos en cada posición.
console.log(array2x2);
// Ahora voy a borrar los valores que cargue en mi array y los voy a vaciar nuevamente para cargar otros arrays
array2x2=[];
console.log(array2x2);// Imprimo para ver si se vació.
//Cargo ahora 2 arrays mas en cada posisción.
array2x2[0]= new Array(2) //   [ [,]  ,  ]
array2x2[1]= new Array(2) //   [ [,]  ,  [,] ]
console.log(array2x2)// Imprimo nuevamente para ver como quedo mi array.
// Vamos a cargar elemenos en las posiciones de nuestro array vacio.
array2x2[0][0]= 1; // [ [1,]  ,  [,] ]
array2x2[0][1]= 2; // [ [1,2]  ,  [,] ]
console.log(array2x2); // Imprimo para ver como va quedando los datos en cada posición
// Completo el resto de mi array.
array2x2[1][0]= 3; // [ [1,2]  ,  [3,] ]
array2x2[1][1]= 4; // [ [1,2]  ,  [3,4] ]
console.log(array2x2); // Imprimo para ver como va quedando los datos en cada posición
console.log();// Voy a dar un salto de linea imprimiendo en vacio.
// Ahora deseo imprimir el elemento que se encuentra en la posicion 0,0 osea el 1 fila 0 columna 0
console.log(array2x2[0][0]);
// Ahora deseo imprimir el elemento que se encuentra en la posicion 1,1 osea el 4 fila 1 columna 1
console.log(array2x2[1][1]);
console.log();

console.log(`El mayor de los elemenos del array es el: ${mayor}`);
