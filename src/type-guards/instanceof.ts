/*
INSTANCEOF EN TYPESCRIPT
------------------------
Sirve para preguntar:

"¿Este objeto fue creado a partir de esta clase?"

Devuelve:
true  -> Sí
false -> No
*/

class Perro {}

const firulais = new Perro();

console.log(firulais instanceof Perro); // true

/*
Úsalo con:
✅ Clases / Objetos

No con:
❌ string
❌ number
❌ interfaces

Regla rápida:
typeof -> primitivos (string, number, boolean)
instanceof -> objetos creados con clases
*/





class Animal{
    constructor (
    public color: string,
    public raza: string,
    public edad: number,
    ){}
}

const max = new Animal(
    "blanco", "Criollo", 34
)

let isInstance = max instanceof Animal;
console.log(isInstance) //true

isInstance = firulais instanceof Animal;
console.log(isInstance) // False
