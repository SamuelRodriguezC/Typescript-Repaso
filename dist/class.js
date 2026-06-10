"use strict";
// Molde para crear objetos (tiene forma Y COMPORTAMIENTO )
// A diferencia de las interfaces tienen COMPORTAMIENDO - METODOS
Object.defineProperty(exports, "__esModule", { value: true });
// Interface = contrato o plano de construcción.
// Clase = objeto real que puede tener constructor, propiedades y métodos.
class Car {
    id;
    brand;
    model;
    color;
    offRoad;
    constructor(id, brand, model, color, offRoad) {
        this.id = id;
        this.brand = brand;
        this.model = model,
            this.color = color,
            this.offRoad = offRoad ?? false;
    }
}
// Forma corta IGUAL FUNCIONAMIENTO
class User {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    greet() {
        return `Hola ${this.name}`;
    }
}
// PROTECTED, PRIVATE Y PULBIC 
class Vehiculo {
    marca; // Accesible desde cualquier lugar
    modelo; // Accesible aquí y en clases hijas
    numeroSerie; // Solo accesible en esta clase
    constructor(marca, modelo, serie) {
        this.marca = marca;
        this.modelo = modelo;
        this.numeroSerie = serie;
    }
    obtenerInfo() {
        return `${this.marca} - ${this.modelo}`;
    }
}
class Auto extends Vehiculo {
    constructor(marca, modelo, serie) {
        super(marca, modelo, serie);
        // Válido: 'modelo' es protected y está en una subclase
        this.modelo = "Nuevo Modelo";
        // Error: 'numeroSerie' es private y no se puede heredar
        // this.numeroSerie = "1234"; 
    }
}
const miAuto = new Auto("Toyota", "Corolla", "SN-999");
// Válido: 'marca' es public
console.log(miAuto.marca);
// Error: 'modelo' es protected, no accesible desde afuera
// console.log(miAuto.modelo); 
// Error: 'numeroSerie' es private, no accesible desde afuera
// console.log(miAuto.numeroSerie);
//# sourceMappingURL=class.js.map