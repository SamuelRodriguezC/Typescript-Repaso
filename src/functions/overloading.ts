/**
 * FUNCTIONS OVERLOADING EN TYPESCRIPT
 *
 * Concepto:
 * Function overloading permite que una misma función
 * tenga múltiples firmas (signatures).
 *
 * Esto significa que la función puede ser llamada
 * de distintas maneras, con distintos parámetros,
 * y TypeScript sabrá qué retorna en cada caso.
 *
 * Estructura:
 *
 * 1. Declaras los overloads (firmas)
 * 2. Escribes UNA implementación real
 */

/* =========================================
   EJEMPLO 1: OVERLOAD BÁSICO
========================================= */

// Overload 1
function identity(value: string): string;

// Overload 2
function identity(value: number): number;

// Implementación real
function identity(value: string | number) {
  return value;
}

const texto = identity("Samuel");
const numero = identity(123);

/*
TypeScript infiere:

texto  -> string
numero -> number
*/

/*
Sin overload:

function identity(value: string | number): string | number

TypeScript diría que ambos retornan:
string | number

Con overload obtiene tipos más precisos.
*/

/* =========================================
   EJEMPLO 2: DIFERENTES CANTIDADES DE PARÁMETROS
========================================= */

// Puede recibir 1 parámetro
function crearMensaje(nombre: string): string;

// Puede recibir 2 parámetros
function crearMensaje(nombre: string, edad: number): string;

// Implementación
function crearMensaje(nombre: string, edad?: number) {
  if (edad !== undefined) {
    return `Hola ${nombre}, tienes ${edad} años`;
  }

  return `Hola ${nombre}`;
}

console.log(crearMensaje("Samuel"));
console.log(crearMensaje("Samuel", 25));

/* =========================================
   EJEMPLO 3: CASO REAL CON FECHAS
========================================= */

/*
La función puede recibir:

1. Un timestamp
2. Mes, día y año
*/

function crearFecha(timestamp: number): Date;
function crearFecha(month: number, day: number, year: number): Date;

function crearFecha(a: number, b?: number, c?: number) {
  if (b !== undefined && c !== undefined) {
    return new Date(c, a, b);
  }

  return new Date(a);
}

const fecha1 = crearFecha(1740000000);
const fecha2 = crearFecha(6, 20, 2026);

/* =========================================
   REGLA IMPORTANTE
========================================= */

/*
La implementación debe soportar TODOS
los overloads.

Esto:
*/

function ejemplo(a: string): string;
function ejemplo(a: number): number;

// Debe manejar string Y number
function ejemplo(a: string | number) {
  return a;
}

/* =========================================
   OVERLOAD VS UNION
========================================= */

/*
UNION:
*/

function unionExample(value: string | number) {
  return value;
}

/*
Retorno inferido:
string | number
*/

/*
OVERLOAD:
*/

function overloadExample(value: string): string;
function overloadExample(value: number): number;

function overloadExample(value: string | number) {
  return value;
}

/*
Retorno:
Si entra string -> string
Si entra number -> number
*/

/* =========================================
   RESUMEN
========================================= */

/*
Function Overloading sirve cuando:

1. Una función acepta distintos tipos
2. O distintos números de parámetros
3. Cada caso tiene reglas específicas

Estructura mental:

Overload signatures:
"Estas son las formas permitidas"

Implementation:
"Así funciona por dentro"
*/