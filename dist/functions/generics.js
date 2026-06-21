"use strict";
// Permite tipar una función con el tipo que se usa al llamarla 
Object.defineProperty(exports, "__esModule", { value: true });
function identity(arg) {
    // Type puede ser cualquier cosa MiTipo, Hola, Tipo,  etc
    // Representa el tipo que puede tener una variable cuando se use la función 
    return arg;
}
//Aqui se especifica que el tipo que debe usar la función es string7
let output = identity("myString");
// Aqui la función infiere el tipo
let output2 = identity("myString");
// Con arreglos de un tipo que no conocemos 
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
//# sourceMappingURL=generics.js.map