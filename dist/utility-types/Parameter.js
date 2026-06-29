"use strict";
// parameters.ts
Object.defineProperty(exports, "__esModule", { value: true });
/*
========================================
PARAMETERS<T>
========================================

Extrae los parámetros de una función
y los devuelve como una tupla.

Function
↓
Parameters
↓
[param1, param2, ...]
*/
/*
Ejemplo 1
*/
function saludar(nombre, edad) { }
// Resultado:
// [string, number]
/*
Ejemplo 2
Reutilizar parámetros
*/
function login(email, password) { }
function validar(...args) {
    console.log(args);
}
/*
RESUMEN MENTAL
========================================

ReturnType -> qué retorna una función
Parameters -> qué recibe una función
*/ 
//# sourceMappingURL=Parameter.js.map