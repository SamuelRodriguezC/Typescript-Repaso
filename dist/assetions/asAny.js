"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nombre = "Samuel";
nombre.toUpperCase(); // 
nombre.toFixed(2); //  TypeScript no se queja
nombre.volar(); //  Tampoco se queja
// Cuándo usar as any?
// Solo cuando:
// Estás migrando código JavaScript a TypeScript.
// Una librería tiene tipos incorrectos.
// No hay otra forma razonable de expresar el tipo.
// En aplicaciones Angular modernas, si ves mucho:
// algo as any
// suele ser una señal de que falta definir correctamente los tipos.
// Una forma de verlo es:
// as string   // "Sé que es un string"
// as User     // "Sé que es un User"
// as any      // "TypeScript, deja de preguntar"
//# sourceMappingURL=asAny.js.map