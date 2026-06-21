"use strict";
// Sirve para definir que tipo de datos recibe una función
// y definir cual es su valor de retorno 
Object.defineProperty(exports, "__esModule", { value: true });
// Una función que usa ese tipo
const sumar = (a, b) => {
    return a + b;
};
console.log(sumar(4, 6)); // 10
// TIPOS GENERICOS 
function firstElement(arr) {
    /* <Type>
    “Todavía no sé qué tipo usarás. Lo sabré cuando llames la función.”
    */
    // (arr: Type[]) el arr debe ser de tipo Type (string, number, any etc)
    // : Type | undefined : la función devuelve Type si el array tiene elementos o undefined si no tiene ninguno
    return arr[0]; //Retorna el elemento en la primera posición 
}
const num = firstElement([1, 2, 3]); //1 
const text = firstElement(["Hola", "Mundo"]); //"Hola"
function first(arr) {
    return arr[0];
}
// PRACTICA 
function identity(variable) {
    return variable;
}
const numero = identity(10);
const texto = identity("Hola");
const activo = identity(true);
// GENERIC FUNCTIONS: funciones que trabajan con tipos variables
function indetityy(value) {
    return value;
}
indetityy(10); // retorna 10 
indetityy("hola"); // retorna"Hola"
// Funciona con diferentes tipos de la misma manera MiType es un placeholder:
// CONSTRAINTS: tipos con cierta estructura
function longest(a, b) {
    return a.length >= b.length ? a : b;
}
// MiTipo extends { length: number }  = Solo acepto tipos que tengan: length
// Lo que pongas en extends { ... } Define qué propiedades TypeScript garantiza que existen.
// Podría ser extends {nombre: Personas} aqui le dices a ts que el tipo Personas tiene una propiedad nombre
// SPECIFING TYPE ARGUMENTS: Puedes pasar el tipo manualmente a la función
identity("hola");
// OPTIONAL PARAMETERS: ? 
function saludo(edad, nombre) {
    // Los parametros opcionales siempre se organizan al final
    return edad;
}
// PARAMETERS DEFAULTS:
function saludar(nombre = "Invitado") {
    return nombre;
}
// NEVER
function error(msg) {
    throw new Error(msg);
}
// la función termina con Error por lo que no retorna nada
// REST PARAMETERS: cuando recibes muchos parámetros
function suma(...nums) {
}
suma(1, 2, 3, 4);
// PARAMETERTS DESTRUCURING: desestrucutar en parámetros
function print({ name, age }) {
}
function makeDate(mOrTimestamp, d, y) {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    }
    else {
        return new Date(mOrTimestamp);
    }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);
//# sourceMappingURL=typing-function.js.map