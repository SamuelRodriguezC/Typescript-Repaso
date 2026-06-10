"use strict";
// Una interfaz sirve para definir 
// la forma que debe tener un objeto.
// contrato o plano de construcción.
Object.defineProperty(exports, "__esModule", { value: true });
// Crear un usuario de tipo user
const persona = {
    id: 13,
    name: "Samuel",
    age: 19,
    eyeColor: "Brown",
    // country: "Colombia" NO ES OBLIGATORIO
};
// EDITAR UN VALOR READONLY (ERROR)
// persona.id = 185
// No se puede asignar a "id" porque es una propiedad de solo lectura.
// Simulando la llegada desde una API 
let personas = [];
// Aquí TypeScript sabe que personas es
//  un arreglo de objetos que cumplen la interfaz UserI.
console.log(persona);
// { name: 'Samuel', age: 19, eyeColor: 'Brown' }
// significa:
// [
//   { ... },
//   { ... },
//   { ... }
// ]
//# sourceMappingURL=interface.js.map