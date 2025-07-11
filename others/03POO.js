


class Animal { 

    constructor(especie,edad,color) {

        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = "Soy un " + this.especie + " tengo " + this.edad + " años " + 
        "y mi color es " + this.color;
    }

    metodoInfo(){
        console.log(this.info);
    }    
}

class Perro extends Animal {
    constructor(especie,edad,color,raza) {
        super(especie,edad,color);
        this.raza = raza;
    }
}   

const perro = new Perro("perro",10,"blanco","doberman");
const gato = new Animal("gato",5,"negro");
const loro = new Animal("cotorra",2,"verde");

Perro.metodoInfo();
gato.metodoInfo();
loro.metodoInfo();