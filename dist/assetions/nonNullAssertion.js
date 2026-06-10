"use strict";
/**
 * ==================================
 * AFIRMACIÓN NO NULA (!)
 * ==================================
 *
 * Significa:
 *
 * "Estoy seguro de que este valor
 * NO es null ni undefined."
 *
 * TypeScript confía en mí.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Puede ser string o null
let nombre = "Samuel";
// Sin !
console.log(nombre.toUpperCase());
// ❌ TypeScript puede marcar error
// porque nombre podría ser null
// Con !
console.log(nombre.toUpperCase());
//  Le digo a TypeScript:
// "Tranquilo, sé que tiene valor"
/**
 * EJEMPLO REAL
 */
const input = document.getElementById("nombre");
// TypeScript piensa:
// input puede ser un elemento o null
input.focus();
// El ! significa:
// "Sé que el elemento existe"
/**
 * CUIDADO
 */
let usuario = null;
usuario.toUpperCase(); // ❌
// TypeScript confía en mí,
// pero al ejecutar la aplicación fallará
// porque usuario realmente es null.
/**
 * RESUMEN
 *
 * variable!
 *
 * Traducción:
 *
 * "Estoy seguro de que no es
 * null ni undefined."
 */ 
//# sourceMappingURL=nonNullAssertion.js.map