function separator(word: string, length: number = 50): void {
    const text = word.trim().toUpperCase();
    const sideLength = Math.floor((length - text.length) / 2);

    const line = "-".repeat(length);
    const middle = `${"-".repeat(sideLength)} ${text} ${"-".repeat(sideLength)}`;

    console.log(line);
    console.log(middle);
    console.log(line);
}


/* 
-----------------------------------------------
------------- ARREGLOS CON STRING -------------
-----------------------------------------------
*/

// Buena práctica usar const para no re asignar otro tipo a la variable 
const habitos: string[] = ['5 AM', 'GYM', 'leer', 'aprender']
// Otra forma de definirlo 
const personas: Array<string> = ['Juan', 'María', 'Pedro', 'Carlos']



/* 
-----------------------------------------------
------------- ARREGLOS CON NUMBERS ------------
-----------------------------------------------
*/
const edades: number[] = [654, 321, 987, 654, 321, 354, 159, 423]
const ids: Array<number> = [654, 321, 987, 321, 687, 215, 357, 963, 412]

/* 
-----------------------------------------------
------------- ARREGLOS CON DIFERENTES TIPOS ------------
-----------------------------------------------
*/
const diferentes: (string | number)[] = ["Holaa", "Tengo", 19, "años"]
const otros: Array<string | number> = ["foo", 23, "Holap"]


/* 
-----------------------------------------------
------------- RECORRIDO DE ARRAYS -------------
-----------------------------------------------
*/

// Recorrer un array con FOR
console.log("----- RECORRIDO CON FOR E INDEXOF -----")
for(const habito of habitos){
    console.log(habitos.indexOf(habito)+1+ ". " + habito)
}

// Recorrer un array con forEach()
console.log("----- RECORRIDO CON FOREACH() -----")
habitos.forEach((habito) => {
    console.log(habito)
})

// For con indice 
console.log("----- FOR CON INDICE i++ -----")
for(let i = 0; i < personas.length; i++) {
    console.log(personas[i])
}

/* 
-----------------------------------------------
------------- FUNCIONES PRINCIPALES -------------
-----------------------------------------------
*/
const numeros = [1, 2, 3, 4];


console.log(separator("map()"))
// map(): toma cada elemento y lo transforma
const dobles = numeros.map(numero => numero * 2);
console.log(dobles); //[2, 4, 6, 8]

// filter(): filtra elementos
console.log(separator("filter()"))
const pares = numeros.filter(numero => numero % 2 === 0); 
console.log(pares) // [2, 4]

// Find(): OBtiene el primer elemento que cumple la condición 
console.log(separator("find()"))
const users = [
    {id: 1,name: "juan"}, 
    {id: 2,name: "Samuel"}
]
const user = users.find(user => user.id === 2);
console.log(user) 


// some(): Se pregunta ¿Existe al menos uno?
const existe = numeros.some(numero => numero == 2) //True


// every(): todos cumplen? 
const todosPares = numeros.every(numero => numero % 2 === 0) //False

// reduce(): Reduce el array a un unico valor
const suma = numeros.reduce((total, numero) => total + numero, 0) // 10

// push ():  Agrega al final 
numeros.push(5) // [1, 2, 3, 4, 5]

// pop (): Elimina el ultimo 
numeros.pop() //[1, 2, 3, 4]


// includes(): Verifica si exsite un valor 
const roles: Array<string> = ["admin", "user"]
roles.includes("admin") //true

// slice(inicio, fin): Copia una parte (posiciones del array)
const copia = numeros.slice(0, 2) // [ 1, 2 ]


// forEach(): recorrer
numeros.forEach(numero => {
    console.log(numero)
})


enum Genero {
    MASCULINO = 1,
    FEMENINO = 2
}

interface Persona {
    id: number,
    nombre: string,
    edad: number;
    genero: Genero
    booleano?: boolean
}

let juan: Persona = {id: 1, nombre: "JUAN", edad: 15, genero: Genero.MASCULINO}
const atributosJuan = Object.entries(juan) as [keyof Persona, any][];

atributosJuan.forEach(([clave, valor]) => {
    // Si la clave actual es 'genero', buscamos su nombre de texto en el Enum
    if (clave === 'genero') {
        console.log(`${clave}: ${Genero[valor]}`); // Imprime "genero: MASCULINO"
    } else {
        console.log(`${clave}: ${valor}`);
    }
});