// Las keys serán string
// Todos los valores serán number
interface Frutas {
  [nombre: string]: number;
}

const inventario: Frutas = {
  manzana: 10,
  banana: 5,
  pera: 8
};

console.log(inventario.manzana); // 10