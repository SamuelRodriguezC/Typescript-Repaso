"use strict";
// ===============================
// CALL SIGNATURE EN TYPESCRIPT
// ===============================
Object.defineProperty(exports, "__esModule", { value: true });
// Creamos una función normal
const saludar = ((nombre) => {
    return `Hola ${nombre}`;
});
// "as Saludar" le dice a TS:
// trata esta función como el tipo Saludar
// Como las funciones en JS son objetos,
// podemos agregarles propiedades
saludar.descripcion = "Función para saludar personas";
// ===============================
// USANDO LA CALL SIGNATURE
// ===============================
// Aquí usamos la propiedad
console.log(saludar.descripcion);
// Output: Función para saludar personas
// Aquí usamos la call signature
console.log(saludar("Samuel"));
const max = (ladrar) => {
    return "El sonido es" + ladrar;
};
max.nombre = "Max";
max("Guauuuu");
//# sourceMappingURL=call-signatures.js.map