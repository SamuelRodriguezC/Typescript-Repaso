"use strict";
/**
 * CONSTRUCTOR PARAMETERS (Parameter Properties) EN TYPESCRIPT
 *
 * Concepto:
 * TypeScript permite declarar y crear propiedades de clase
 * directamente desde los parámetros del constructor.
 *
 * Esto se logra usando modificadores:
 * public, private, protected, readonly
 *
 * 👉 A esto se le llama "Parameter Properties"
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* =========================================
   EJEMPLO 1: SIN CONSTRUCTOR PARAMETERS
========================================= */
class Persona1 {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
const p1 = new Persona1("Samuel", 25);
/*
Aquí estamos haciendo mucho trabajo repetido:
- declarar propiedades
- asignarlas en el constructor
*/
/* =========================================
   EJEMPLO 2: CONSTRUCTOR PARAMETERS (VERSIÓN LIMPIA)
========================================= */
class Persona2 {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}
const p2 = new Persona2("Samuel", 25);
/*
 TypeScript hace automáticamente esto por ti:

class Persona2 {
  public nombre: string;
  private edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
*/
/* =========================================
   EJEMPLO 3: READONLY
========================================= */
class Producto {
    nombre;
    id;
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
}
const prod = new Producto("Laptop", 101);
console.log(prod.nombre); // OK
console.log(prod.id); // OK
// prod.id = 200 ERROR: readonly no se puede modificar
/*
readonly significa:
- solo se asigna una vez en el constructor
- luego es inmutable
*/
/* =========================================
   EJEMPLO 4: PRIVATE vs PUBLIC vs PROTECTED
========================================= */
class Usuario {
    username;
    password;
    rol;
    constructor(username, password, rol) {
        this.username = username;
        this.password = password;
        this.rol = rol;
    }
}
const u = new Usuario("samuel", "1234", "admin");
console.log(u.username); // OK (public)
// console.log(u.password); ❌ No accesible (private)
/*
private:
- solo dentro de la clase

protected:
- dentro de la clase y subclases

public:
- accesible desde cualquier parte
*/
/* =========================================
   EJEMPLO 5: HERENCIA + PROTECTED
========================================= */
class Empleado extends Usuario {
    constructor(username, password, rol) {
        super(username, password, rol);
    }
    mostrarRol() {
        console.log(this.rol); // OK porque es protected
    }
}
/* =========================================
   RESUMEN
========================================= */
/*
Constructor Parameters (Parameter Properties):

Permiten declarar e inicializar propiedades
directamente desde el constructor.

Sintaxis:

constructor(
  public nombre: string,
  private edad: number,
  readonly id: number
)

TypeScript automáticamente crea:
- propiedades de clase
- asignaciones en this
*/
/*
Regla mental:

Sin esto:
-> declaro propiedades + asigno en constructor

Con esto:
-> declaro + asigno en una sola línea 🚀
*/
// Práctica
class Perro {
    nombre;
    color;
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }
}
const max = new Perro("Max", "Blanco");
//# sourceMappingURL=constructor-parameters.js.map