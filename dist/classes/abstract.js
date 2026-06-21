"use strict";
// Un plano para creación de clases
// No se puede instanciar 
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
    // Método normal (con implementación)
    dormir() {
        console.log(`${this.nombre} está durmiendo 💤`);
    }
}
// No se puede instanciar 
// const animal = new Animal("Firulais"); // ERROR 
// Uso correcto 
class Perro extends Animal {
    hacerSonido() {
        console.log("Wooof");
    }
}
class Gato extends Animal {
    hacerSonido() {
        console.log("raaaaw");
    }
}
// Instanciación 
const perro = new Perro("Rex");
const gato = new Gato("Michi");
perro.dormir(); // Rex está durmiendo 💤
perro.hacerSonido(); // Wooof 🐶
gato.hacerSonido(); // raaaaw 🐱
//# sourceMappingURL=abstract.js.map