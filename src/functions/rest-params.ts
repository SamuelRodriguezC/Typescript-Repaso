// Función que va a recibir muchos 
// Parámetros y no sabemos cuantos

function sumar(...args: number[]): number {
    // args es una array de tipo number
  return args.reduce((total, num) => total + num, 0);
}

// Uso
sumar(1, 2)
sumar(1, 2, 3, 4)
sumar(10, 20, 30, 40, 50)



// Con function type 
type Sumador = (...nums: number[]) => number;
const miSuma: Sumador = (...nums) => {
  return nums.reduce((a, b) => a + b, 0);
};


// Desempaquetar un array en una función usando spread operator
const nums = [1, 2, 3];

sumar(...nums);