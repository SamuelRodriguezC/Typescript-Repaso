"use strict";
// CONCEPTO: Type Predicate (Predicado de tipo)
// Sirve para decirle a TypeScript qué tipo tiene una variable.
Object.defineProperty(exports, "__esModule", { value: true });
// Type Predicate
// Si esta función devuelve true,
// TypeScript entenderá que animal es Perro. (animal is Perro -> true )
function esPerro(animal) {
    return "ladrar" in animal;
}
function hablar(animal) {
    if (esPerro(animal)) {
        // Aquí TypeScript ya sabe que es Perro
        animal.ladrar();
    }
    else {
        // Aquí sabe que es Gato
        animal.maullar();
    }
}
const perro = {
    ladrar: () => console.log("Guau guau")
};
hablar(perro);
//# sourceMappingURL=type-predicates.js.map