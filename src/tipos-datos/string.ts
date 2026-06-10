let nombre: string = "Samuel";

/* AGREGAR STRING  */
let nombreCompleto: string = nombre += " Rodriguez Castro";
console.log(nombreCompleto);

/* Include("string"): Devuelve un booleano 
si tiene el string especificado */ 
let includs: boolean = nombre.includes("samuel");
console.log(includs); // False


/* indexOf("string"): Devuelve la posición de coincidencia
o -1 si no la encuentra
*/
let indexof: number = nombre.indexOf('a');
console.log(indexof); //1

/* slice(inicio, fin): trae la porción de la cadena
desde el inicio hasta el fin (sin incluirlo)
 */
let porcion: string = nombre.slice(1, 3);
console.log(porcion); //am

/* toLowerCase() .toUpperCase(): Convierten TODO
de a mayusculas o minuscular 
 */
console.log(nombre.toUpperCase()); // SAMUEL 
console.log(nombre.toLowerCase()); // samuel


/* trim(): Elimina los espacios en blanco (traducción RECORTAR)
AL PRINCIO Y AL FINAL 
*/
console.log(nombre.trim());

/* replace('texto viejo', 'texto nuevo'): Reemplaza
la primera coincidencia del texto
*/ 
let replaced: string = nombre.replace(nombre, "Rodriguez");
console.log('El nombre reemplazado es: ' + replaced);

/*split('separador'): Divide el string en un arreglo de subcadenas
usando el sepadador
 */
let sentense: string = "Hola, mi nombre es  Samuel jeje :)"
let sentenseSeparated: Array<string> = sentense.split(" ")
let separated: Array<string> = replaced.split("")
console.log(sentenseSeparated)
console.log(separated)



// Repaso
let animal: string = "Perro Max"
console.log(animal.slice(6))
console.log(animal.includes("Perro"))
console.log(animal.split(""))
console.log(animal.replace("Max", "Milo"))

