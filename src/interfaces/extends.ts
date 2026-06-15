// Interfaz base
interface Persona {
  nombre: string;
  edad: number;
}

// Esta interfaz extiende a Persona
interface Estudiante extends Persona {
  curso: string;
}

// Objeto que cumple con Estudiante
const alumno: Estudiante = {
  nombre: "Samuel",
  edad: 20,
  curso: ""
};

console.log(alumno.nombre);
console.log(alumno.curso);