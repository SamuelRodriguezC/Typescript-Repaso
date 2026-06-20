// Destructuring significa extraer los valores de objetos o arrays directamente
// en los parámetros de una funcioón
// Para no hacerlo dentro de la función 
// Es como abrir una caja 📦 y sacar solo lo que necesitas.


// creamos un tipo de objeto
type Usuario = {
  nombre: string;
  edad: number;
};

// Función nommal
function mostrarUsuario(usuario: Usuario) {
  console.log(usuario.nombre);
  console.log(usuario.edad);
}

// Con destructuring 
function mostrarUsuarioDestructuring({ nombre, edad }: Usuario) {
  console.log(nombre);
  console.log(edad);
} 

// Con destructuring tipado
function x({ nombre, edad }: { nombre: string; edad: number }) {
  console.log(nombre);
  console.log(edad);
} 


// Con arrays

// Normalmente
function mostrarCoordenadas(coords: number[]) {
  console.log(coords[0]);
  console.log(coords[1]);
}


// Con destrcuturing 
function mostrarCoordenadasDestr([x, y]: number[]) {
  console.log(x);
  console.log(y);
}


mostrarCoordenadasDestr([10, 20]);


// Valores por defecto 
