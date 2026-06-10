// ========================================
// NEVER EN TYPESCRIPT
// ========================================

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

function saludar(): void {
    console.log("Hola Samuel");
}

// La función termina normalmente.
// Simplemente no retorna nada.

saludar();


// ========================================
// EJEMPLO 2 - NEVER CON ERROR
// ========================================

function lanzarError(): never {
    throw new Error("Algo salió mal");
}

// Esta función JAMÁS termina correctamente.
// Siempre lanza un error.
//
// Por eso el tipo de retorno es NEVER.


// ========================================
// EJEMPLO 3 - NEVER CON BUCLE INFINITO
// ========================================

// function bucleInfinito(): never {
//     while (true) {
//         console.log("Trabajando...");
//     }
// }

// Nunca sale del while.
// Nunca llega a un return.
// Nunca termina.


// ========================================
// EJEMPLO 4 - NEVER NO PUEDE GUARDAR NADA
// ========================================

//  ERROR

// let dato: never = "Samuel";

// ERROR

// let dato: never = 25;

// ERROR

// let dato: never = true;


// ¿Por qué?
//
// Porque NEVER representa:
//
// "No existe ningún valor válido"


// ========================================
// EJEMPLO 5 - CUANDO TYPESCRIPT INFIERE NEVER
// ========================================

type Gender = "Male" | "Female";

function mostrarGenero(gender: Gender) {

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

    const imposible: never = gender;
}


// ========================================
// COMPARACIÓN FINAL
// ========================================

function ejemploVoid(): void {
    console.log("La función termina");
}

function ejemploNever(): never {
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