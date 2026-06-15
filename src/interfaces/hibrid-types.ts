// Contrato del Hybrid Type
interface Contador {
  (): void;       // Puede llamarse como función
  valor: number;  // Debe tener esta propiedad
  reset(): void;  // Debe tener este método
}

// Función que crea un Contador - usa la interfaz como contrato (la funciones también son objetos)
function crearContador(): Contador {
  
  // Creamos una función y le decimos a TS:
  // "trátala como un Contador"
  const contador = (() => {
    contador.valor++; // cada vez que se llame, aumenta valor
  }) as Contador;

  // Agregamos la propiedad exigida por la interfaz
  contador.valor = 0;

  // Agregamos el método exigido por la interfaz
  contador.reset = () => {
    contador.valor = 0;
  };

  // Retornamos algo que cumple TODO el contrato
  return contador;
}

// Crear contador
const miContador = crearContador();


// -------------------------
// Usándolo como función
// -------------------------
miContador();
miContador();
miContador();

console.log(miContador.valor); // 3


// -------------------------
// Usándolo como objeto
// -------------------------
miContador.reset();

console.log(miContador.valor); // 0