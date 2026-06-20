/**
 * METHOD OVERRIDING EN TYPESCRIPT
 *
 * Concepto:
 * Method Overriding ocurre cuando una clase hija
 * redefine un método que ya existe en su clase padre.
 *
 *  Es decir:
 * la clase hija "reescribe" el comportamiento heredado.
 */

/* =========================================
   EJEMPLO 1: CLASE PADRE
========================================= */

class Animal {
  constructor(public nombre: string) {}

  hacerSonido(): void {
    console.log(`${this.nombre} hace un sonido genérico`);
  }
}

/*
Este método será heredado por las clases hijas,
pero puede ser sobrescrito (override).
*/

/* =========================================
   EJEMPLO 2: CLASES HIJAS (OVERRIDE)
========================================= */

class Perro extends Animal {
  override hacerSonido(): void {
    console.log(`${this.nombre}: Guau 🐶`);
  }
}

class Gato extends Animal {
  override hacerSonido(): void {
    console.log(`${this.nombre}: Miau 🐱`);
  }
}

/*
👉 override indica explícitamente que estás
redefiniendo un método del padre.

TypeScript valida que:
- el método exista en la clase padre
- la firma sea compatible
*/

/* =========================================
   EJEMPLO 3: USO
========================================= */

const perro = new Perro("Rex");
const gato = new Gato("Michi");

perro.hacerSonido(); // Rex: Guau 🐶
gato.hacerSonido();  // Michi: Miau 🐱

/* =========================================
   EJEMPLO 4: SIN OVERRIDE (MISMO RESULTADO PERO MENOS SEGURO)
========================================= */

class Vaca extends Animal {
  hacerSonido(): void {
    console.log(`${this.nombre}: Muuu 🐮`);
  }
}

/*
Funciona igual, pero sin "override"
TypeScript no valida explícitamente
que estás sobrescribiendo un método del padre.
*/

/* =========================================
   EJEMPLO 5: ERROR DE OVERRIDE
========================================= */

class Ave extends Animal {
  // ❌ Error si usas override incorrectamente
  // override volar(): void {}

  override hacerSonido(): void {
    console.log(`${this.nombre}: Pio pio 🐦`);
  }
}

/*
Si el método no existe en la clase padre,
TypeScript te lanza error al usar "override"
*/

/* =========================================
   IDEA CLAVE
========================================= */

/*
Method Overriding = redefinir un método heredado

Regla mental:

- Padre define comportamiento base
- Hijo lo reemplaza con su propia versión

👉 "Mismo método, comportamiento diferente por clase"
*/