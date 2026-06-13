"use strict";
// keyof-explicacion.ts
Object.defineProperty(exports, "__esModule", { value: true });
/*
TypeScript convierte eso en:

type KeysUsuario = "nombre" | "edad" | "activo"

Es decir:
KeysUsuario SOLO puede ser uno de esos strings.
*/
// Ejemplo válido
let key1 = "nombre";
// Ejemplo válido
let key2 = "edad";
const producto = {
    id: 1,
    nombre: "Mouse",
    precio: 50000
};
// Sin keyof
function obtenerValorMalo(obj, campo) {
    // campo puede ser cualquier string
    // eso es peligroso
}
/*
Problema:

Alguien podría hacer:

obtenerValorMalo(producto, "color")

Pero "color" no existe.
Boom  error potencial.
*/
// Con keyof
function obtenerValorBueno(obj, campo) {
    return obj[campo];
}
// Correcto 
obtenerValorBueno(producto, "nombre");
// Correcto 
obtenerValorBueno(producto, "precio");
/*
Muchos principiantes creen que:

keyof Persona

devuelve:
- Samuel
- 24

NO.

Devuelve:
- nombre
- edad

IMPORTANTE:
keyof trabaja con NOMBRES de propiedades,
no con valores.
*/
/*
===========================================
4. KEYOF + TYPEOF
===========================================

Este combo aparece muchísimo.
*/
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2024
};
/*
Resultado:

"marca" | "modelo" | "anio"
*/
/*
===========================================
5. USO REAL
===========================================
*/
function mostrarCampo(campo) {
    console.log(`El campo es: ${campo}`);
}
mostrarCampo("nombre"); // 
mostrarCampo("edad"); // 
// Error 
// mostrarCampo("direccion");
/*
===========================================
6. ERRORES COMUNES
===========================================
*/
// ERROR 1:
// Creer que keyof funciona con valores
const nombre = "Samuel";
// Incorrecto 
// type Test = keyof nombre
/*
¿Por qué falla?

Porque keyof necesita un TIPO u objeto,
no un string simple.
*/
// ERROR 2:
// Confundir typeof con keyof
/*
typeof pregunta:
"¿Qué tipo tiene esto?"

keyof pregunta:
"¿Qué propiedades tiene este tipo?"
*/
/*
===========================================
RESUMEN FINAL
===========================================

keyof:

1. Recibe un tipo
2. Extrae sus propiedades
3. Devuelve una unión de strings

Ejemplo:

type Usuario = {
  nombre: string;
  edad: number;
}

keyof Usuario

Resultado:

"nombre" | "edad"

Piensa en keyof como:

Un inspector de etiquetas
Mira un objeto y dice:
"Estas son todas las llaves que tiene"
*/
//# sourceMappingURL=keyof.js.map