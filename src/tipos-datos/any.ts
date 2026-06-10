/*  
SE USA SIEMPRE QUIE NO QUIERAS QUE UN VALOR CAUSE ERRORES DE 
COMPROBACIÓN DE TIPOS 

any le dice a TypeScript: "No revises el tipo de esta variable,
 yo me encargo."
*/ 

let nombre: string = "Samuel"; 
// nombre = 25; ERROR DE TYPE 

// SI usas ANY 
let dato: any  = "Samuel" //cualquier tipo

// El guardia se va de vacaciones 
dato = "Samuel";
dato = 25;
dato = true;
dato = [];
dato = {};


/* noImplicitAny
noImplicitAny es una regla de TypeScript que le dice al compilador:

"No permitas variables o parámetros cuyo tipo sea any sin que yo 
lo haya escrito explícitamente."

*/
// ANTES 

// function saludar(nombre) {
//     return "Hola " + nombre; //Aqui nombre es ANY (definido por ts)
// }

// LUEGO DE CONFIGURAR
/* ts.config 
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
  */

// function saludar2(nombre) {
//     return "Hola " + nombre;
// }

/* Parameter 'nombre' implicitly has an 'any' type.

TypeScript te obliga a ser explícito:

*/



function greet(): never {
  console.log("HOLA")
}