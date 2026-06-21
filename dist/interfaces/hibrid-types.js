"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Función que crea un Contador - usa la interfaz como contrato (la funciones también son objetos)
function crearContador() {
    // Creamos una función y le decimos a TS:
    // "trátala como un Contador"
    const contador = (() => {
        contador.valor++; // cada vez que se llame, aumenta valor
    });
    // Agregamos la propiedad exigida por la interfaz
    contador.valor = 0;
    // Agregamos el método exigido por la interfaz
    contador.reset = () => {
        contador.valor = 0;
    };
    // Retornamos algo que cumple TODO el contrato
    return contador;
}
// Crear contador
const miContador = crearContador();
// -------------------------
// Usándolo como función
// -------------------------
miContador();
miContador();
miContador();
console.log(miContador.valor); // 3
// -------------------------
// Usándolo como objeto
// -------------------------
miContador.reset();
console.log(miContador.valor); // 0
//# sourceMappingURL=hibrid-types.js.map