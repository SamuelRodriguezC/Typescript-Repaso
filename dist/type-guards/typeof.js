"use strict";
/*
TYPEOF EN TYPESCRIPT
--------------------
Sirve para preguntar:

"¿Qué tipo de dato es esto?"

Devuelve strings como:
- "string"
- "number"
- "boolean"
- "object"
- "undefined"
*/
Object.defineProperty(exports, "__esModule", { value: true });
const nombre = "Samuel";
const edad = 25;
const activo = true;
console.log(typeof nombre); // "string"
console.log(typeof edad); // "number"
console.log(typeof activo); // "boolean"
/*
Úsalo con:
✅ string
✅ number
✅ boolean
✅ undefined

No se usa para identificar clases.
Para eso usamos instanceof.
*/
/*
Regla rápida:
typeof -> primitivos
instanceof -> objetos creados con clases
*/ 
//# sourceMappingURL=typeof.js.map