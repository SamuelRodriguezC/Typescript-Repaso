// Representa un objeto 

let usuario: object = {
    nombre: "Samuel",
    edad: 19,
}

// PROBLEMA 
// TypeScript sabe que es un objeto,
//  pero no sabe qué propiedades tiene 
// Puede tener cualquiera o ninguna
console.log(usuario.nombre);



// interface

// Describe exactamente cómo debe ser el objeto.

interface Usuario {
    nombre: string;
    edad: number;
}

let persona: Usuario = {
    nombre: "Samuel",
    edad: 19,
    // genero: "Masculino" ERROR
};