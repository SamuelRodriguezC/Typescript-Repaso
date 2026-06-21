"use strict";
// Sirve para tipar tipos genericos de una función
Object.defineProperty(exports, "__esModule", { value: true });
function obtenerLength(valor) {
    //return valor.length; // TS no sabe que tipo vendrá 
}
function obtenerLength2(valor) {
    // T puede ser cualquier tipo…
    // pero debe tener una propiedad length de tipo number.
    return valor.length;
}
// El tipo recibido debe ser persona
function saludar(persona) {
    return "Hola" + persona.nombre;
}
// uso 
saludar({ nombre: "samuel", edad: 5 });
// Ejemplo con keys
// T -> tipo del objeto
// K -> constaint: debe ser una key de T
function getProperty(obj, key) {
    return obj[key];
}
// creamos un objeto
const user = {
    nombre: "Samuel",
    edad: 25
};
// Esto funciona
getProperty(user, "nombre");
// getProperty(user, "correo") Correo no existe en user
//# sourceMappingURL=constaint.js.map