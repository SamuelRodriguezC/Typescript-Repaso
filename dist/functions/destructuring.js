"use strict";
// Destructuring significa extraer los valores de objetos o arrays directamente
// en los parámetros de una funcioón
// Para no hacerlo dentro de la función 
// Es como abrir una caja 📦 y sacar solo lo que necesitas.
Object.defineProperty(exports, "__esModule", { value: true });
// Función nommal
function mostrarUsuario(usuario) {
    console.log(usuario.nombre);
    console.log(usuario.edad);
}
// Con destructuring 
function mostrarUsuarioDestructuring({ nombre, edad }) {
    console.log(nombre);
    console.log(edad);
}
// Con destructuring tipado
function x({ nombre, edad }) {
    console.log(nombre);
    console.log(edad);
}
// Con arrays
// Normalmente
function mostrarCoordenadas(coords) {
    console.log(coords[0]);
    console.log(coords[1]);
}
// Con destrcuturing 
function mostrarCoordenadasDestr([x, y]) {
    console.log(x);
    console.log(y);
}
mostrarCoordenadasDestr([10, 20]);
// Valores por defecto 
//# sourceMappingURL=destructuring.js.map