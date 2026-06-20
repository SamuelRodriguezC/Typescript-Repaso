// Sirve para tipar tipos genericos de una función

function obtenerLength<T>(valor: T) {
  //return valor.length; // TS no sabe que tipo vendrá 
}


function obtenerLength2<T extends { length: number }>(valor: T) {
    // T puede ser cualquier tipo…
    // pero debe tener una propiedad length de tipo number.
    return valor.length;
}


// Con interfaces
interface Persona{
    nombre: string,
    edad: number,
}

// El tipo recibido debe ser persona
function saludar<T extends Persona>(persona: T): string{
    return "Hola" + persona.nombre;
}

// uso 
saludar({nombre: "samuel", edad: 5})


// Ejemplo con keys

// T -> tipo del objeto
// K -> constaint: debe ser una key de T
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

// creamos un objeto
const user = {
  nombre: "Samuel",
  edad: 25
};

// Esto funciona
getProperty(user, "nombre")
// getProperty(user, "correo") Correo no existe en user