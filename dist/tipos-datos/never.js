"use strict";
// ========================================
// NEVER EN TYPESCRIPT
// ========================================
Object.defineProperty(exports, "__esModule", { value: true });
// NEVER significa:
//
// "Este código NUNCA devolverá un valor"
//
// o
//
// "Este punto del programa NUNCA debería alcanzarse"
// ========================================
// EJEMPLO 1 - VOID
// ========================================
function saludar() {
    console.log("Hola Samuel");
}
// La función termina normalmente.
// Simplemente no retorna nada.
saludar();
// ========================================
// EJEMPLO 2 - NEVER CON ERROR
// ========================================
function lanzarError() {
    throw new Error("Algo salió mal");
}
function mostrarGenero(gender) {
    if (gender === "Male") {
        console.log("Hombre");
        return;
    }
    if (gender === "Female") {
        console.log("Mujer");
        return;
    }
    // Para TypeScript este punto es imposible.
    //
    // Ya cubrimos todos los casos:
    // Male y Female.
    //
    // Entonces gender aquí sería NEVER.
    const imposible = gender;
}
// ========================================
// COMPARACIÓN FINAL
// ========================================
function ejemploVoid() {
    console.log("La función termina");
}
function ejemploNever() {
    throw new Error("La función nunca termina");
}
/*

VOID:
Inicio
 ↓
Ejecuta código
 ↓
Fin

NEVER:
Inicio
 ↓
Error o ciclo infinito
 ↓
Nunca hay fin

*/ 
//# sourceMappingURL=never.js.map