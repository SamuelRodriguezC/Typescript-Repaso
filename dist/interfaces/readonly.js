"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Crear objeto
const usuario = {
    id: 1,
    nombre: "Samuel"
};
console.log(usuario);
// Modificar propiedad normal
usuario.nombre = "Carlos"; // ✅ permitido
// Modificar propiedad readonly
// usuario.id = 2; // ❌ Error en TypeScript
console.log(usuario);
const config = {
    datos: {
        nombre: "Samuel"
    }
};
// Esto NO se puede
// config.datos = { nombre: "Carlos" }; // ❌ Error
// Pero esto SÍ se puede
config.datos.nombre = "Carlos"; // ✅ permitido
console.log(config);
// ----------------------------
// ¿Por qué a veces sí cambia?
// ----------------------------
// TypeScript desaparece al compilar a JavaScript
// Si usas "any", desactivas la protección
const userHack = {
    id: 1
};
userHack.id = 999; // ✅ JavaScript lo permite
console.log(userHack);
//# sourceMappingURL=readonly.js.map