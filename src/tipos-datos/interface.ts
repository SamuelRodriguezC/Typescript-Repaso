// Una interfaz sirve para definir 
// la forma que debe tener un objeto.
// contrato o plano de construcción.

interface User {
    readonly id: number
    // readonly significa que esta propiedad (id) solo puede
    // recibir un valor al crear el objeto y después no puede modificarse
    name: string, 
    age: number 
    eyeColor: string 
    country?: string // ? hace una propiedad opcional 
}


// Crear un usuario de tipo user
const persona: User = { //Si falta una propiedad ERROR
    id: 13,
    name: "Samuel", 
    age: 19,
    eyeColor: "Brown",
    // country: "Colombia" NO ES OBLIGATORIO
}

// EDITAR UN VALOR READONLY (ERROR)
// persona.id = 185
// No se puede asignar a "id" porque es una propiedad de solo lectura.

// Simulando la llegada desde una API 
let personas: User[] = []
// Aquí TypeScript sabe que personas es
//  un arreglo de objetos que cumplen la interfaz UserI.

console.log(persona) 
// { name: 'Samuel', age: 19, eyeColor: 'Brown' }


// significa:
// [
//   { ... },
//   { ... },
//   { ... }
// ]