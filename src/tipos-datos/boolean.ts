// Se puede definir de varias maneras
let activo: boolean = true

// Validar el tipo de dato de una variable
let nombre: string | null = "string"
if(nombre){ //True
    console.log("Tu nombre es: " + nombre)
}


// Validar el tipo de la variable 
let anything: any = "NOSE "
if(typeof anything === "string"){
    console.log("¡Hola " + anything.trim() + "!")
}

// typeof permite saber el tipo de dato de una variable devuelve un STRIN
console.log(typeof anything)


// MEJORES PRÁCTICAS AL USAR BOOLEANOS EN COMPARACIONES 

// if(activo === true) NOOOOOOOOO
if(activo){
    console.log("Buena Práctica ")
}

// if(activo === false) NOOOOOOOOO
if(!activo){
    console.log("Buena práctica")
}




/* 
-----------------------------------------------
 CONVERTIR CUALQUIER TIPO A SU EQUIVALENTE BOOLEANO (!!)
-----------------------------------------------
*/

let username: string | null = "Juan";
let count: number = 0;
let saludo: string = "HOLA";
let saludoVacio: string = "";
// !!username evalúa a true (porque "Juan" tiene contenido)
console.log(!!username); // true

// !!count evalúa a false (porque el 0 es un valor falsy)
console.log(!!count); // false

// !!saludo muestra true (por que la variable tiene un string asignado)
console.log(!!saludo)

// !!saludoVAcio muestra false porque la variable no tiene nada asignado
console.log(!!saludoVacio)