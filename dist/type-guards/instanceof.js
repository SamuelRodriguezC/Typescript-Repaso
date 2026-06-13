"use strict";
/*
INSTANCEOF EN TYPESCRIPT
------------------------
Sirve para preguntar:

"¿Este objeto fue creado a partir de esta clase?"

Devuelve:
true  -> Sí
false -> No
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Perro {
}
const firulais = new Perro();
console.log(firulais instanceof Perro); // true
/*
Úsalo con:
✅ Clases / Objetos

No con:
❌ string
❌ number
❌ interfaces

Regla rápida:
typeof -> primitivos (string, number, boolean)
instanceof -> objetos creados con clases
*/
class Animal {
    color;
    raza;
    edad;
    constructor(color, raza, edad) {
        this.color = color;
        this.raza = raza;
        this.edad = edad;
    }
}
const max = new Animal("blanco", "Criollo", 34);
let isInstance = max instanceof Animal;
console.log(isInstance); //true
isInstance = firulais instanceof Animal;
console.log(isInstance); // False
//# sourceMappingURL=instanceof.js.map