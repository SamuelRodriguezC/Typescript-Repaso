"use strict";
// PERMITE PREGUNTAR ESTA PROPIEDAD EXISTE EN ESTE OBJETO? 
Object.defineProperty(exports, "__esModule", { value: true });
const usuario = {
    nombre: "Samuel",
    edad: 21
};
console.log("nombre" in usuario); // true
console.log("email" in usuario); // false
//# sourceMappingURL=in.js.map