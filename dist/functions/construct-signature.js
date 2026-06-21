"use strict";
/**
 * CONSTRUCT SIGNATURE EN TYPESCRIPT
 *
 * Concepto:
 * Un construct signature describe el tipo de algo
 * que puede ser instanciado usando "new".
 *
 * Sintaxis:
 *
 * new (parametros) => TipoRetorno
 *
 * Se usa para decirle a TypeScript:
 * "Esto debe ser una clase o constructor válido"
 */
Object.defineProperty(exports, "__esModule", { value: true });
/* =========================================
   EJEMPLO 1: CLASE NORMAL
========================================= */
class Persona {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
}
const samuel = new Persona("Samuel");
console.log(samuel.nombre);
/* =========================================
   EJEMPLO 3: FUNCIÓN QUE RECIBE UNA CLASE
========================================= */
function crearPersona(Constructor) {
    return new Constructor("Samuel");
}
const personaNueva = crearPersona(Persona);
console.log(personaNueva);
/*
¿Por qué funciona?

Porque Persona cumple:

new (nombre: string) => Persona
*/
/* =========================================
   EJEMPLO 4: OTRA CLASE COMPATIBLE
========================================= */
class Empleado {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
}
const convertir = (x) => x.toString();
console.log(convertir(10));
class Animal {
    nombre;
    constructor(nombre) {
        this.nombre = nombre;
    }
}
function crearAnimal(Constructor) {
    return new Constructor("Firulais");
}
const perro = crearAnimal(Animal);
console.log(perro);
/* =========================================
   RESUMEN
========================================= */
/*
Construct Signature:

Define el tipo de algo que puede usarse con "new"

Sintaxis:
new (parametros) => TipoRetorno

Ejemplo:
new (nombre: string) => Persona

Sirve para:
1. Tipar constructores
2. Pasar clases como parámetros
3. Validar uso de "new"
*/
/*
Regla mental:

Call Signature:
fn()

Construct Signature:
new Clase()
*/ 
//# sourceMappingURL=construct-signature.js.map