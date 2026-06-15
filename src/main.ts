// Intersection types 
interface Usuario {
    nombre: string,
    email: string,
    password: string,
}

interface Persona {
    edad: number,
    nacionalidad: string,
}

type ciudadano = Usuario & Persona;

let Samuelo: ciudadano = {nombre: "Samuel", email: "samuelo@gmail.com", password: "******", edad: 45, nacionalidad: "Colombiano"}  

// Union types
type ejemplo = string | string[]
let variable: ejemplo = ["hola", "jaja"]