// readonly significa: esta propiedad no se puede modificar
interface Usuario {
  readonly id: number; // solo se asigna una vez
  nombre: string;      // esta sí se puede cambiar
}

// Crear objeto
const usuario: Usuario = {
  id: 1,
  nombre: "Samuel"
};

console.log(usuario);

// Modificar propiedad normal
usuario.nombre = "Carlos"; // ✅ permitido

// Modificar propiedad readonly
// usuario.id = 2; // ❌ Error en TypeScript

console.log(usuario);


// ----------------------------
// readonly en objetos internos
// ----------------------------

interface Config {
  readonly datos: {
    nombre: string;
  };
}

const config: Config = {
  datos: {
    nombre: "Samuel"
  }
};

// Esto NO se puede
// config.datos = { nombre: "Carlos" }; // ❌ Error

// Pero esto SÍ se puede
config.datos.nombre = "Carlos"; // ✅ permitido

console.log(config);


// ----------------------------
// ¿Por qué a veces sí cambia?
// ----------------------------

// TypeScript desaparece al compilar a JavaScript
// Si usas "any", desactivas la protección

const userHack: any = {
  id: 1
};

userHack.id = 999; // ✅ JavaScript lo permite

console.log(userHack);