"use strict";
/*
Sirve para convertir todas las propiedades de un tipo en propiedades opcionales ?
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Se deben pasar todos lo parámetros para cumplir con el contrato
const user1 = { id: 21, username: "samuelo", passsword: "AW&45324234" };
//Como este es un tipo que es partial todas sus propiedades son opcionales 
//por lo que no es necesario pasarle todos los parámetros
const myuser = { id: 32 };
// Para que sirve? 
// Se usa cuando queremos hacer as propiedades opcionales sin cambiar directamente el tipo
// Se tiene que recibir un id pero cualquiera de los datos que se pueden recibir de la interfaz User son opcionales
// Permitiendo actualizar solo los datos que se pasen
function UpdateUser(id, data) {
    //Lógica para actuializar solo lo que venga 
}
UpdateUser(21, { username: "samuelooo1234" }); //Aquí le podemos pasar cualquier propiedad de user opcionalmente 
//Crear un arreglo de objetos tipo Auto
const autosReault = [
    { id: 21, color: "gris", placa: "EDS-234", seguro: true },
    { id: 12, color: "azul", placa: "WES-753", seguro: true },
    { id: 32, color: "verde", placa: "TSD-235", seguro: false },
    { id: 43, color: "marron", placa: "SBF-976", seguro: true },
    { id: 67, color: "gris", placa: "WER-240", seguro: false },
];
console.log(autosReault[0]);
// Recibir el id obligatorio para identificar el objeto y atributos opcionales de la interfaz para actualizarlos
function updateAuto(id, data) {
    // Buscar en el array un objeto que conicida con el id proporcionado
    const auto = autosReault.find(a => a.id === id);
    // Si no hay un auto con ese id
    if (!auto) {
        console.log("El usuario no existe");
        return;
    }
    // Asignar al objeto con id tal, la data tal 
    Object.assign(auto, data);
}
//actualizar usuario
updateAuto(21, { color: "Rojo", placa: "PDS-567" });
console.log(autosReault[0]);
//# sourceMappingURL=partial.js.map