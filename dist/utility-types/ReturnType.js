"use strict";
// return-type.ts
Object.defineProperty(exports, "__esModule", { value: true });
/*
========================================
RETURNTYPE<T>
========================================

ReturnType obtiene el tipo que
retorna una función.

Function
↓
ReturnType
↓
Tipo de retorno
*/
/*
Ejemplo 1
*/
function saludar() {
    return "Hola";
}
/*
Ejemplo 2
*/
function sumar(a, b) {
    return a + b;
}
/*
Ejemplo 3
Retorno con objeto
*/
function crearUsuario() {
    return {
        id: 1,
        name: "Samuel"
    };
}
/*
Resultado:

{
  id: number
  name: string
}
*/
/*
Ejemplo 4
Con async
*/
async function obtenerNombre() {
    return "Samuel";
}
/*
Resultado:
Promise<string>

Ojo:
NO devuelve string
porque async siempre retorna Promise
*/
//# sourceMappingURL=ReturnType.js.map