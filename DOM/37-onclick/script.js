// Selecciono el div por su Id.
const div = document.getElementById('contenedor');

// Creo una función para cambiar los valores del atributo CSS style
function redondo(){
    div.style.borderRadius="50%";
    div.style.backgroundColor="#086108";
};

function cuadrado(){
    div.style.borderRadius="5px";
    div.style.backgroundColor="#0f81df";
};
// Creo una función para cambiar el valor del atributo HTML id
function cambiarAtributo(){
    div.id= "cambiar";
};

// Modificar el parrafo.
function parrafo(){
    const e = document.createElement('h3');
    e.innerHTML = "Soy un titulo h3";
    const p = document.getElementsByTagName('p');
    console.log(p);
    p[0].replaceWith(e);
}
