"use strict";
// awaited.ts
Object.defineProperty(exports, "__esModule", { value: true });
// Resultado:
// string
/*
Ejemplo 2: con una función async
*/
async function obtenerUsuario() {
    return "Samuel";
}
// Resultado:
/*
{
  id: number
  name: string
}
*/
/*
RESUMEN MENTAL
========================================

Promise  -> caja cerrada
await    -> abre la caja en runtime
Awaited  -> abre la caja en tipos
*/ 
//# sourceMappingURL=Awaited.js.map