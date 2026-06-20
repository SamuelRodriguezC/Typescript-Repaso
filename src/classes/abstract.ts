// Un plano para creación de clases
// No se puede instanciar 

abstract class Animal {
  constructor(
    public nombre: string
    ) {}

  // Método normal (con implementación)
  dormir() {
    console.log(`${this.nombre} está durmiendo 💤`);
  }

  // Método abstracto (sin implementación)
  abstract hacerSonido(): void;
}


// No se puede instanciar 
// const animal = new Animal("Firulais"); // ERROR 


// Uso correcto 
class Perro extends Animal{
    hacerSonido(): void {
        console.log("Wooof")
    }
}

class Gato extends Animal{
    hacerSonido(): void {
        console.log("raaaaw")
    }
}

// Instanciación 
const perro = new Perro("Rex");
const gato = new Gato("Michi");

perro.dormir();       // Rex está durmiendo 💤
perro.hacerSonido();  // Wooof 🐶

gato.hacerSonido();   // raaaaw 🐱