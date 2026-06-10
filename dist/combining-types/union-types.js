"use strict";
// LA VARIABLE U OBJETO PUEDE SER DE UN TIPO O DE OTRO 
// PERO SOLO UNO A LA VEZ 
Object.defineProperty(exports, "__esModule", { value: true });
function printId(id) {
    if (typeof id === "string") {
        // en esta rama, id es tipo 'string'
        console.log(id.toUpperCase());
    }
    else {
        // aqui, id es de tipo 'number'
        console.log(id);
    }
}
// Otro ejemplo es utilizar una función como Array.isArray:
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // aqui: 'x' es 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // aqui: 'x' es 'string'
        console.log("Welcome lone traveler " + x);
    }
}
let humano = ["Ojos", "Piernas", "Tronco", "Cabello", "Craneo"];
if (typeof humano === "string") {
    console.log(humano);
}
else {
    for (let parte of humano) {
        console.log(parte);
    }
}
humano = "Samuel";
if (typeof humano === "string") {
    console.log(humano);
}
else {
    for (let parte of humano) {
        console.log(parte);
    }
}
//# sourceMappingURL=union-types.js.map