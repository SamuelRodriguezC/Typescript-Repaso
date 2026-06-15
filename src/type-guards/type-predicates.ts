// CONCEPTO: Type Predicate (Predicado de tipo)
// Sirve para decirle a TypeScript qué tipo tiene una variable.

// Un animal puede ser Perro o Gato
type Perro = {
  ladrar: () => void;
};

type Gato = {
  maullar: () => void;
};

type Animal = Perro | Gato;

// Type Predicate
// Si esta función devuelve true,
// TypeScript entenderá que animal es Perro. (animal is Perro -> true )
function esPerro(animal: Animal): animal is Perro {
  return "ladrar" in animal;
}

function hablar(animal: Animal) {
  if (esPerro(animal)) {
    // Aquí TypeScript ya sabe que es Perro
    animal.ladrar();
  } else {
    // Aquí sabe que es Gato
    animal.maullar();
  }
}

const perro: Perro = {
  ladrar: () => console.log("Guau guau")
};

hablar(perro);