"use strict";
// Representa un objeto 
Object.defineProperty(exports, "__esModule", { value: true });
let usuario = {
    nombre: "Samuel",
    edad: 19,
};
// PROBLEMA 
// TypeScript sabe que es un objeto,
//  pero no sabe qué propiedades tiene 
// Puede tener cualquiera o ninguna
console.log(usuario.nombre);
let persona = {
    nombre: "Samuel",
    edad: 19,
    // genero: "Masculino" ERROR
};
//# sourceMappingURL=object.js.map