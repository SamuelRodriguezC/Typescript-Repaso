"use strict";
/**
 * POLIMORFISMO EN TYPESCRIPT
 *
 * Concepto:
 * Polimorfismo significa "muchas formas".
 *
 * En programación orientada a objetos:
 * Es cuando diferentes clases responden al mismo método
 * pero con comportamientos distintos.
 *
 * "Mismo método, distinta implementación"
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* =========================================
   EJEMPLO 1: CLASE BASE (ABSTRACTA)
========================================= */
class Animal {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
}
/*
Animal define un "contrato":
toda clase hija debe implementar hacerSonido()
*/
/* =========================================
   EJEMPLO 2: IMPLEMENTACIONES DIFERENTES
========================================= */
class Perro extends Animal {
    hacerSonido() {
        console.log(`${this.nombre}: Guau 🐶`);
    }
}
class Gato extends Animal {
    hacerSonido() {
        console.log(`${this.nombre}: Miau 🐱`);
    }
}
class Vaca extends Animal {
    hacerSonido() {
        console.log(`${this.nombre}: Muuu 🐮`);
    }
}
/* =========================================
   EJEMPLO 3: POLIMORFISMO EN ACCIÓN
========================================= */
const animales = [
    new Perro("Rex"),
    new Gato("Michi"),
    new Vaca("Lola"),
];
/*
Aunque todos son tipo Animal,
cada uno ejecuta su propia versión del método.
*/
animales.forEach((animal) => {
    animal.hacerSonido();
});
class Cuadrado {
    lado;
    constructor(lado) {
        this.lado = lado;
    }
    area() {
        return this.lado * this.lado;
    }
}
class Circulo {
    radio;
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio * this.radio;
    }
}
const figuras = [
    new Cuadrado(4),
    new Circulo(3),
];
figuras.forEach((figura) => {
    console.log("Área:", figura.area());
});
/*
Aquí el mismo método area()
se comporta distinto según la clase.
*/
/* =========================================
   EJEMPLO 5: IDEA CLAVE
========================================= */
/*
Polimorfismo = mismo método, distintos comportamientos

No importa el tipo concreto,
solo importa que el objeto "responda" al método.
*/
/*
Regla mental:

 "No pregunto qué eres, pregunto qué haces"
*/ 
//# sourceMappingURL=polimofirsm.js.map