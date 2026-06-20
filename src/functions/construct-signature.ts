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

/* =========================================
   EJEMPLO 1: CLASE NORMAL
========================================= */

class Persona {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

const samuel = new Persona("Samuel");

console.log(samuel.nombre);

/*
Aquí:
new Persona("Samuel")

Hace:
1. Llama al constructor
2. Crea un objeto Persona
*/

/* =========================================
   EJEMPLO 2: CONSTRUCT SIGNATURE
========================================= */

/*
Este type dice:

"Acepto cualquier constructor que:
- reciba un string
- retorne un Persona"
*/

type PersonaConstructor = new (nombre: string) => Persona;

/* =========================================
   EJEMPLO 3: FUNCIÓN QUE RECIBE UNA CLASE
========================================= */

function crearPersona(Constructor: PersonaConstructor): Persona {
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
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

/*
Esto NO sirve para PersonaConstructor
porque retorna Empleado, no Persona
*/

/*
crearPersona(Empleado) 
*/

/* =========================================
   CALL SIGNATURE VS CONSTRUCT SIGNATURE
========================================= */

/*
CALL SIGNATURE:
Se usa con funciones normales
*/

type MiFuncion = (x: number) => string;

const convertir: MiFuncion = (x) => x.toString();

console.log(convertir(10));

/*
Se llama así:
convertir(10)
*/

/*
CONSTRUCT SIGNATURE:
Se usa con constructores
*/

type MiConstructor = new (nombre: string) => Persona;

/*
Se usa así:
new Algo("Samuel")
*/

/* =========================================
   EJEMPLO 5: INTERFACE CON CONSTRUCTOR
========================================= */

interface AnimalConstructor {
  new (nombre: string): Animal;
}

class Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

function crearAnimal(Constructor: AnimalConstructor) {
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