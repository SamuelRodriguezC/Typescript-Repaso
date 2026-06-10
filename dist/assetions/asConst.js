"use strict";
/**
 * ==========================================
 * ¿QUÉ HACE "as const"?
 * ==========================================
 *
 * Le dice a TypeScript:
 *
 * "Conserva exactamente estos valores
 * y no permitas modificarlos."
 *
 * Efectos:
 *
 * 1. Los valores se vuelven específicos.
 * 2. Las propiedades se vuelven readonly.
 * 3. Los arrays se convierten en tuplas readonly.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ------------------------------------------
// SIN as const
// ------------------------------------------
const usuario1 = {
    nombre: "Samuel",
    edad: 25
};
/*
TypeScript interpreta:

{
    nombre: string;
    edad: number;
}

No le importa que el valor sea "Samuel".
Solo sabe que es un string.
*/
usuario1.nombre = "Juan"; // ✅ Permitido
// ------------------------------------------
// CON as const
// ------------------------------------------
const usuario2 = {
    nombre: "Samuel",
    edad: 25
};
/*
Ahora TypeScript interpreta:

{
    readonly nombre: "Samuel";
    readonly edad: 25;
}

Observa que:

- nombre ya NO es string
- nombre es EXACTAMENTE "Samuel"

- edad ya NO es number
- edad es EXACTAMENTE 25

- todo es readonly
*/
// usuario2.nombre = "Juan"; ❌ Error
// ------------------------------------------
// EJEMPLO CON ARRAYS
// ------------------------------------------
const roles1 = ["admin", "user"];
/*
TypeScript ve:

string[]
*/
roles1.push("guest"); // ✅
// ------------------------------------------
const roles2 = ["admin", "user"];
/*
TypeScript ve:

readonly ["admin", "user"]

Ya no es un array cualquiera.

Es una tupla fija:

Posición 0 -> "admin"
Posición 1 -> "user"
*/
// roles2.push("guest"); ❌ Error
// ------------------------------------------
// CASO REAL MUY COMÚN
// ------------------------------------------
const STATUS = {
    PENDING: "pending",
    APPROVED: "approved",
    REJECTED: "rejected"
};
/*
TypeScript sabe que:

STATUS.PENDING  -> "pending"
STATUS.APPROVED -> "approved"
STATUS.REJECTED -> "rejected"

NO son strings genéricos.
Son valores exactos.
*/
console.log(STATUS.PENDING);
// ------------------------------------------
// ¿POR QUÉ ES ÚTIL?
// ------------------------------------------
function updateStatus(status) {
    console.log(`Estado: ${status}`);
}
updateStatus(STATUS.PENDING); // ✅
updateStatus(STATUS.APPROVED); // ✅
// updateStatus("otro"); ❌ Error
// ------------------------------------------
// RESUMEN
// ------------------------------------------
/*
as const significa:

"TypeScript, conserva exactamente
estos valores y no permitas cambios."

ANTES:

{
    nombre: string
}

DESPUÉS:

{
    readonly nombre: "Samuel"
}
*/ 
//# sourceMappingURL=asConst.js.map