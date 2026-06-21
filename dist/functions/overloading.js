"use strict";
/**
 * FUNCTIONS OVERLOADING EN TYPESCRIPT
 *
 * Concepto:
 * Function overloading permite que una misma función
 * tenga múltiples firmas (signatures).
 *
 * Esto significa que la función puede ser llamada
 * de distintas maneras, con distintos parámetros,
 * y TypeScript sabrá qué retorna en cada caso.
 *
 * Estructura:
 *
 * 1. Declaras los overloads (firmas)
 * 2. Escribes UNA implementación real
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Implementación real
function identity(value) {
    return value;
}
const texto = identity("Samuel");
const numero = identity(123);
// Implementación
function crearMensaje(nombre, edad) {
    if (edad !== undefined) {
        return `Hola ${nombre}, tienes ${edad} años`;
    }
    return `Hola ${nombre}`;
}
console.log(crearMensaje("Samuel"));
console.log(crearMensaje("Samuel", 25));
function crearFecha(a, b, c) {
    if (b !== undefined && c !== undefined) {
        return new Date(c, a, b);
    }
    return new Date(a);
}
const fecha1 = crearFecha(1740000000);
const fecha2 = crearFecha(6, 20, 2026);
// Debe manejar string Y number
function ejemplo(a) {
    return a;
}
/* =========================================
   OVERLOAD VS UNION
========================================= */
/*
UNION:
*/
function unionExample(value) {
    return value;
}
function overloadExample(value) {
    return value;
}
/*
Retorno:
Si entra string -> string
Si entra number -> number
*/
/* =========================================
   RESUMEN
========================================= */
/*
Function Overloading sirve cuando:

1. Una función acepta distintos tipos
2. O distintos números de parámetros
3. Cada caso tiene reglas específicas

Estructura mental:

Overload signatures:
"Estas son las formas permitidas"

Implementation:
"Así funciona por dentro"
*/ 
//# sourceMappingURL=overloading.js.map