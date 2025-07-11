


class Animal { 

    constructor(especie,edad,color) {

        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = "Soy un " + this.especie + " tengo " + this.edad + " años " + 
        "y mi color es " + this.color;
    }

   
}

const perro = new Animal("perro",10,"blanco");
const gato = new Animal("gato",5,"negro");
const loro = new Animal("cotorra",2,"verde");

console.log(perro.info); 
console.log(gato.info); 
console.log(loro.info); 

