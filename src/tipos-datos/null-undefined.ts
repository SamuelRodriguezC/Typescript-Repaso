// UNDEFINED: La variable existe pero aún no tiene valor 

let nombre: string;
console.log(nombre); //undefined 

// NULL: Yo quiero indicar que no hay ningún valor
let apellido: string | null = null; // tu mismo dices que no hay valor
console.log(apellido) //null 




// ¿Qué es strictNullChecks?
// Es una opción de TypeScript que
// obliga a manejar correctamente null y undefined.

/* 
tsconfig.json 
{
  "compilerOptions": {
    "strictNullChecks": true
  }
}
*/ 

// let nombre: string = null; ERRRORRR
// let nombre: string = undefined; ERRORRRRRR

// Como se permite? 
let perro: string | null = null;
let gato: string | undefined;
let pajaro: string | null | undefined;


// Operador ?. (muy usado en Angular)
console.log(pajaro?.toUpperCase());
// Si nombre es null o undefined - Si tiene valor "PERICO"


// Operador ??
// Permite definir un valor por defecto.

const persona = null;

console.log(persona ?? 'Invitado');