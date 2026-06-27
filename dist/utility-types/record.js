"use strict";
// Sirve para crear tipos en donde hay muchas keys con un solo tipo 
// y muchos values que tienen un solo tipo 
// Es básucmanete un diccionario tipado 
Object.defineProperty(exports, "__esModule", { value: true });
const rol = { "id": "", "email": "" };
const Max = { "Shnaizer": "MAAX", "Frenchpuddle": "Maxmililinaod" };
const puntajes = {
    "maria": [3, 6, 4, 7, 7],
    "pedro": [4, 9, 3, 4, 7],
    "lucas": [3, 6, 5, 8, 5],
    // "mateo": [4, 7, 7, 9, 9] No se puede por que el tipo no tiene definida la key "mateo"
};
const campeonatoSuba = {
    "partidosJugados": 32, // Este valor también puede ser un number así que Ojo con esto number | string 
    "ganador": "Juanito" // Este valor también puede ser un number así que Ojo con esto number | string 
};
//# sourceMappingURL=record.js.map