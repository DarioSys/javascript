
//Declaramos un arreglo de números.
let numeros = [15, 3, 9, 27, 6];

// Aplicamos el médoto length para ver la longitud e imprimimos.
console.log(numeros.length);

// Declaramos una variable llamada mayor.
let mayor = -9999;

// Recorremos el array con un bucle for.
for (let i=0; i<numeros.length; i++){
    if(numeros[i]>mayor){
        mayor=numeros[i];
    }   
}
//Imprimo el resultado
console.log("El mayor de los elementos del array es : " + mayor);
console.log("El mayor de los elementos del array es :", mayor);
console.log(`El mayor de los elementos del array es : ${mayor}`);
