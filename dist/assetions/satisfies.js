"use strict";
/**
 * ==========================================
 * SATISFIES
 * ==========================================
 *
 * Significa:
 *
 * "Verifica que este objeto cumpla
 * una estructura, pero conserva
 * sus tipos originales."
 *
 * Es como mostrar una credencial:
 *
 * TypeScript revisa que cumplas
 * los requisitos antes de dejarte pasar.
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ------------------------------------------
// OBJETO VÁLIDO
// ------------------------------------------
const user = {
    name: "Samuel",
    age: 25
};
/*
TypeScript revisa:

- Tiene name
- Tiene age
- Los tipos son correctos

Todo bien.
*/
// ------------------------------------------
// OBJETO INVÁLIDO
// ------------------------------------------
const user2 = {
    name: "Samuel"
};
/*
 Error

Falta la propiedad age
*/
// ------------------------------------------
// OTRO ERROR
// ------------------------------------------
const user3 = {
    name: "Samuel",
    age: "25"
};
/*
 Error

age debe ser number
y no string
*/
// ------------------------------------------
// DIFERENCIA CON "as"
// ------------------------------------------
const user4 = {
    name: "Samuel"
};
/*
⚠️ TypeScript confía en ti.

Le estás diciendo:

"Créeme, esto es un User."

Aunque realmente falte age.
*/
const user5 = {
    name: "Samuel"
};
const config = {
    apiUrl: "https://api.com",
    timeout: 5000
};
/*
 Cumple el contrato Config
*/
// ------------------------------------------
// RESUMEN
// ------------------------------------------
/*
satisfies Tipo

Traducción:

"Comprueba que este objeto
cumpla la estructura Tipo."

Ejemplo:

const user = {
    name: "Samuel",
    age: 25
} satisfies User;

TypeScript responde:

✅ Sí cumple User
*/ 
//# sourceMappingURL=satisfies.js.map