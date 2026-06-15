// CONCEPTO: Truthy / Falsy (Reducción de veracidad)
// JavaScript convierte valores a true o false automáticamente en un if.


// IF no solo acepta booleanos sino que se pregunta 
// ¿Esto tiene algo o está vacio? 



// Falsy (se comportan como false)
console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false

// Truthy (se comportan como true)
console.log(Boolean("Hola")); // true
console.log(Boolean(123));    // true
console.log(Boolean([]));     // true

function saludar(nombre: string | null) {
  if (nombre) {
    console.log("Hola " + nombre);
  } else {
    console.log("No hay nombre");
  }
}

saludar("Samuel"); // Hola Samuel
saludar(null);     // No hay nombre