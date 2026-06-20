/**
 * CONSTRUCTOR OVERLOADING EN TYPESCRIPT
 *
 * Permite crear una clase con diferentes formas de instanciarla.
 */

/* =========================================
   EJEMPLO 1: OVERLOADS DEL CONSTRUCTOR
========================================= */

class Usuario {
  nombre: string;
  edad: number;

  // 1. Firma 1: solo nombre
  constructor(nombre: string);

  // 2. Firma 2: nombre + edad
  constructor(nombre: string, edad: number);

  // Implementación real (única)
  constructor(nombre: string, edad?: number) {
    this.nombre = nombre;
    this.edad = edad ?? 0;
  }
}

/* =========================================
   USO
========================================= */

const u1 = new Usuario("Samuel");
const u2 = new Usuario("Ana", 25);

/*
👉 u1:
nombre = Samuel
edad = 0 (valor por defecto)

👉 u2:
nombre = Ana
edad = 25
*/

/* =========================================
   EJEMPLO 2: CASO MÁS CLARO (DISTINTAS FORMAS)
========================================= */

class Producto {
  id: number;
  nombre: string;

  constructor(id: number);
  constructor(id: number, nombre: string);

  constructor(id: number, nombre?: string) {
    this.id = id;
    this.nombre = nombre ?? "Sin nombre";
  }
}

const p1 = new Producto(1);
const p2 = new Producto(2, "Laptop");

/* =========================================
   QUÉ ESTÁ PASANDO REALMENTE
========================================= */

/*
TypeScript usa las "firmas" para validar:

constructor(nombre: string);
constructor(nombre: string, edad: number);

Pero en JavaScript real solo existe:
constructor(nombre: string, edad?: number)
*/

/* =========================================
   DIFERENCIA CON FUNCTION OVERLOADING
========================================= */

/*
Function Overloading:
- varias funciones signatures

Constructor Overloading:
- varias formas de crear el mismo objeto con "new"
*/

/* =========================================
   IDEA CLAVE
========================================= */

/*
Constructor Overloading = múltiples formas de construir un objeto

Regla mental:

👉 "Una clase, muchas formas de nacer"
*/


// PRÁCTICA
class Computador {
    id: number;
    ram: string;

    // Firma 1 
    constructor(id: number);
    
    // Firma 2 
    constructor(id: number, ram?: string);

    constructor(id: number, ram?:string){
        this.id = id;
        this.ram = ram ?? "";
    }
}

const nitro = new Computador(45); // Firma 1
const acer = new Computador(45, "Acer x4 pro MAx") //Firma 2
