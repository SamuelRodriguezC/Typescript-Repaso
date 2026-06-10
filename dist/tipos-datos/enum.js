"use strict";
/*
Es un forma de crear un lista de valores permitidos
con nombres fáciles de enteder
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Estado;
(function (Estado) {
    Estado[Estado["Pendiente"] = 0] = "Pendiente";
    Estado[Estado["EnProceso"] = 1] = "EnProceso";
    Estado[Estado["Entregado"] = 2] = "Entregado";
})(Estado || (Estado = {}));
let estadoPaquete = Estado.Pendiente;
console.log(estadoPaquete);
estadoPaquete = Estado.EnProceso;
// Tambien se le pueden agregar valores o ids  a los enums 
var Rol;
(function (Rol) {
    Rol[Rol["Admin"] = 1] = "Admin";
    Rol[Rol["Asesor"] = 2] = "Asesor";
    Rol[Rol["Estudiante"] = 3] = "Estudiante";
})(Rol || (Rol = {}));
let usuario = Rol.Admin;
console.log(Rol[1]); // Motrar el nombre
// RECORRER UN ENUM 
console.log(Object.keys(Rol));
// [ '1', '2', '3', 'Admin', 'Asesor', 'Estudiante' ]
// RECORRER Y OBTENER SOLO LOS NOMBRES
console.log(Object.keys(Rol).filter(k => isNaN(Number(k))));
// Convertir enum a array (muy útil para Selects)
const roles = Object.values(Rol).filter(v => typeof v === "string");
// 
//# sourceMappingURL=enum.js.map