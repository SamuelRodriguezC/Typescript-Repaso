// Define un tipo híbrido
interface Contador {
  (inicio: number): string; // Se puede llamar como función
  valor: number;            // Propiedad
  reset(): void;            // Método
}

function crearContador(): Contador {
  const contador = ((inicio: number) => {
    return `Inició en ${inicio}`;
  }) as Contador;

  contador.valor = 0;

  contador.reset = () => {
    contador.valor = 0;
  };

  return contador;
}

const miContador = crearContador();

console.log(miContador(10)); // llamar como función
console.log(miContador.valor); // usar propiedad

miContador.valor = 50;
console.log(miContador.valor);

miContador.reset();
console.log(miContador.valor);