"use strict";
// Symbol en TypeScript/JavaScript
Object.defineProperty(exports, "__esModule", { value: true });
// Es un tipo primitivo que siempre genera valores únicos
const id1 = Symbol("id");
const id2 = Symbol("id");
//console.log(id1 === id2); // false (siempre son distintos)
// Se usa para crear claves únicas en objetos
const ID = Symbol("id");
const usuario = {
    nombre: "Samuel",
    [ID]: 123 // propiedad "oculta" con Symbol
};
// No hay colisiones con otras propiedades string
usuario.nombre = "Otro nombre"; // normal
// usuario["id"] no afecta al Symbol
// Tipo en TS:
let token;
token = Symbol("token");
//# sourceMappingURL=symbol.js.map