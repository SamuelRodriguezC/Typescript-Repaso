/*
Es un forma de crear un lista de valores permitidos 
con nombres fáciles de enteder
*/

enum Estado {
    Pendiente, // 0
    EnProceso, // 1
    Entregado, // 2
}

let estadoPaquete: Estado = Estado.Pendiente; 
console.log(estadoPaquete);

estadoPaquete = Estado.EnProceso


// Tambien se le pueden agregar valores o ids  a los enums 
enum Rol {
    Admin = 1,
    Asesor = 2,
    Estudiante = 3,
}
let usuario: Rol = Rol.Admin

console.log(Rol[1]) // Motrar el nombre


// RECORRER UN ENUM 
console.log(Object.keys(Rol))
// [ '1', '2', '3', 'Admin', 'Asesor', 'Estudiante' ]


// RECORRER Y OBTENER SOLO LOS NOMBRES
console.log(Object.keys(Rol).filter(k => isNaN(Number(k))))


// Convertir enum a array (muy útil para Selects)
const roles = Object.values(Rol).filter(v => typeof v === "string")


// 
