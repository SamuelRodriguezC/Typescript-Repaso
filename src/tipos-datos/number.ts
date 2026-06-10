let pi: number = 3.1416


// .toFixed(limiteDecimales):
// convierte a string 
// limita la cantidad de decimaels

let decimals: string = pi.toFixed(2) //3.14
// let decimals: number = pi.toFixed(2) ERROR TYPE


/* .toPRecision(longitud): string
devuelve un string con el número redondeado 
a la logitud especificada
 */
console.log(pi.toPrecision(1))



// ----- MATH (Clase Nativa)------- 

// Math.round(num): number 
// Redondea al número entero más cercano 
console.log(Math.round(pi))

/* Math.floor(num): number
Redondea hacia abajo (entero menor)

Math.ceil(num): number
Redondea hacia arriba (entero mayor)
*/

// Math.abs(num): number 
// Es el valor absoluto (convierne negativos en positivos)



// -------------------------------------
/* Math.max(a, b, c): number
Devuelve el número mayor 
*/
let numbers: Array<number> = [5 , 45, 63, 87, 65, 75, 45, 85, 654, 523, 985, 4425]; 
let maxNumber: number = Math.max(...numbers) 
// ... SPREAD OPERATOR (toma algo agrupado y lo desempaqueta)
console.log(maxNumber)

/* Math.min(a, b, c): number
Devuelve el número menor
 */
let minNumber: number = Math.min(...numbers);
console.log(minNumber)