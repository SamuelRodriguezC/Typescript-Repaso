"use strict";
// async-promises.ts
Object.defineProperty(exports, "__esModule", { value: true });
/*
========================================
1. PROMISE
========================================

Una Promise representa un valor que llegará en el futuro.

Estados:
- pending   -> esperando
- resolved  -> éxito
- rejected  -> error
*/
function obtenerUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve("Samuel");
            }
            else {
                reject("Error al obtener usuario");
            }
        }, 2000);
    });
}
/*
.then() se ejecuta cuando resolve() ocurre
.catch() se ejecuta cuando reject() ocurre
*/
obtenerUsuario()
    .then((usuario) => {
    console.log("Promise:", usuario);
})
    .catch((error) => {
    console.log("Promise Error:", error);
});
/*
========================================
2. ASYNC
========================================

async convierte una función en una función
que SIEMPRE devuelve una Promise.
*/
async function saludar() {
    return "Hola";
}
// Aunque devuelve string, internamente retorna:
// Promise.resolve("Hola")
saludar().then((mensaje) => {
    console.log("Async:", mensaje);
});
/*
========================================
3. AWAIT
========================================

await pausa la ejecución hasta que
una Promise termine.

Solo puede usarse dentro de funciones async.
*/
async function main() {
    try {
        const usuario = await obtenerUsuario();
        console.log("Await:", usuario);
    }
    catch (error) {
        console.log("Await Error:", error);
    }
}
main();
/*
========================================
RESUMEN MENTAL
========================================

Promise:
"Algo que llegará después"

async:
"Esta función trabaja con Promises"

await:
"Espera aquí hasta que termine"
*/ 
//# sourceMappingURL=async-promises.js.map