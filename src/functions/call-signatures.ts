// ===============================
// CALL SIGNATURE EN TYPESCRIPT
// ===============================

// Una call signature sirve para decirle a TypeScript:
// "Este objeto puede llamarse como una función usando ()"


// Definimos un tipo llamado Saludar
type Saludar = {

  // Propiedad normal del objeto
  descripcion: string;

  // CALL SIGNATURE
  // Dice:
  // - recibe un string llamado nombre
  // - retorna un string
  (nombre: string): string;
};


// Creamos una función normal
const saludar = ((nombre: string) => {
  return `Hola ${nombre}`;
}) as Saludar;
// "as Saludar" le dice a TS:
// trata esta función como el tipo Saludar


// Como las funciones en JS son objetos,
// podemos agregarles propiedades
saludar.descripcion = "Función para saludar personas";


// ===============================
// USANDO LA CALL SIGNATURE
// ===============================

// Aquí usamos la propiedad
console.log(saludar.descripcion);
// Output: Función para saludar personas


// Aquí usamos la call signature
console.log(saludar("Samuel"));
// Output: Hola Samuel

type Perro = {
  nombre: string,
  (ladrar: string): string;
}

const max: Perro = (ladrar) => {
  return "El sonido es" + ladrar
}


max.nombre = "Max"
max("Guauuuu")


