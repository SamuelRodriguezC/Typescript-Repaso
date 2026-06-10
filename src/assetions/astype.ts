
// Las aserciones de tipo (as) en TypeScript son una 
// forma de decirle al compilador:

// "Confía en mí, yo sé qué tipo de dato es esto."
// Trata este valor como si fuera este tipo

// No cambian el valor ni hacen conversiones reales. 
// Solo le indican a TypeScript cómo debe tratar una variable.


let dato: unknown  = "Hola Mundo"
console.log(typeof dato)

let texto = dato as string 

console.log(texto.toUpperCase())


// Ejemplo común en Angular

// Cuando buscas un elemento HTML:

const input = document.getElementById("name") as HTMLInputElement;

console.log(input.value);


// ----------------------------------------
// Sin as
const input2 = document.getElementById("name");

// input2.value; // Error

// Porque getElementById() podría devolver cualquier elemento HTML.