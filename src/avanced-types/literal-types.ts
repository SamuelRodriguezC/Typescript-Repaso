// literal-types.ts

// =====================================================
// 1. STRING NORMAL vs STRING LITERAL
// =====================================================

let lenguaje = "TypeScript";

// TypeScript infiere:
/// lenguaje: string

// Eso significa:
// Puede ser cualquier string

lenguaje = "JavaScript";
lenguaje = "Python";



// =====================================================
// 2. STRING LITERAL TYPE
// =====================================================

// Aquí no permitimos cualquier string.
// Solo uno específico.

let rol: "admin";

rol = "admin"; // ✅ válido

// rol = "user"; ❌ Error
// Type '"user"' is not assignable to type '"admin"'


// Literal type = valor exacto como tipo



// =====================================================
// 3. ¿Para qué sirve?
// =====================================================

// Para restringir valores permitidos.

type Direction = "left" | "right" | "up" | "down";

let move: Direction;

move = "left";  // ✅
move = "up";    // ✅

// move = "diagonal"; ❌


// Es como un mini enum sin enum.



// =====================================================
// 4. EN FUNCIONES
// =====================================================

function mover(direccion: "left" | "right") {
  console.log("Moviendo hacia:", direccion);
}

mover("left");  // ✅
mover("right"); // ✅

// mover("up"); ❌


// Esto evita errores tipo:
// mover("lef")
// typo detected. Boom 💥



// =====================================================
// 5. NUMBER LITERALS
// =====================================================

let dado: 1 | 2 | 3 | 4 | 5 | 6;

dado = 3; // ✅
dado = 6; // ✅

// dado = 8; ❌


// También funcionan con números.



// =====================================================
// 6. BOOLEAN LITERALS
// =====================================================

let estado: true;

estado = true; // ✅

// estado = false; ❌


// Sí, incluso con boolean.


// =====================================================
// 7. COMBINADOS EN OBJETOS
// =====================================================

type ApiResponse = {
  status: "success" | "error";
};

const response1: ApiResponse = {
  status: "success"
};

const response2: ApiResponse = {
  status: "error"
};

// const response3: ApiResponse = {
//   status: "loading" ❌
// };


// Muy útil en frontend / Angular / React
// para manejar estados de UI.



// =====================================================
// 8. TYPE INFERENCE (detalle importante)
// =====================================================

const x = "hola";
//x: "hola"