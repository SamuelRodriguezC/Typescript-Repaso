// keyof-explicacion.ts

/*
===========================================
1. ¿QUÉ ES KEYOF?
===========================================

keyof toma un TIPO y devuelve
las propiedades (keys) de ese tipo.

Piensa en un objeto como una casa 🏠

Casa:
- puerta
- ventana
- techo

keyof pregunta:
"¿Cómo se llaman todas las partes de esta casa?"
*/

// Creamos un tipo
type Usuario = {
  nombre: string;
  edad: number;
  activo: boolean;
};

/*
Usuario tiene 3 propiedades:
- nombre
- edad
- activo
*/

// Ahora usamos keyof
type KeysUsuario = keyof Usuario;

/*
TypeScript convierte eso en:

type KeysUsuario = "nombre" | "edad" | "activo"

Es decir:
KeysUsuario SOLO puede ser uno de esos strings.
*/

// Ejemplo válido
let key1: KeysUsuario = "nombre";

// Ejemplo válido
let key2: KeysUsuario = "edad";

// Error 
// let key3: KeysUsuario = "correo";
// "correo" no existe en Usuario



/*
===========================================
2. ¿POR QUÉ SIRVE?
===========================================

Sirve para evitar errores cuando trabajas
con propiedades dinámicas.
*/

type Producto = {
  id: number;
  nombre: string;
  precio: number;
};

const producto: Producto = {
  id: 1,
  nombre: "Mouse",
  precio: 50000
};

// Sin keyof
function obtenerValorMalo(obj: Producto, campo: string) {
  // campo puede ser cualquier string
  // eso es peligroso
}

/*
Problema:

Alguien podría hacer:

obtenerValorMalo(producto, "color")

Pero "color" no existe.
Boom  error potencial.
*/


// Con keyof
function obtenerValorBueno(obj: Producto, campo: keyof Producto) {
  return obj[campo];
}

// Correcto 
obtenerValorBueno(producto, "nombre");

// Correcto 
obtenerValorBueno(producto, "precio");

// Error 
// obtenerValorBueno(producto, "color");



/*
===========================================
3. KEYOF NO DEVUELVE VALORES
===========================================
*/

type Persona = {
  nombre: string;
  edad: number;
};

/*
Muchos principiantes creen que:

keyof Persona

devuelve:
- Samuel
- 24

NO.

Devuelve:
- nombre
- edad

IMPORTANTE:
keyof trabaja con NOMBRES de propiedades,
no con valores.
*/



/*
===========================================
4. KEYOF + TYPEOF
===========================================

Este combo aparece muchísimo.
*/

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2024
};

/*
typeof obtiene el tipo del objeto
*/

type Carro = typeof carro;

/*
Es equivalente a:

type Carro = {
  marca: string;
  modelo: string;
  anio: number;
}
*/

/*
Ahora keyof obtiene las propiedades
*/

type KeysCarro = keyof Carro;

/*
Resultado:

"marca" | "modelo" | "anio"
*/



/*
===========================================
5. USO REAL
===========================================
*/

function mostrarCampo(campo: keyof Usuario) {
  console.log(`El campo es: ${campo}`);
}

mostrarCampo("nombre"); // 
mostrarCampo("edad");   // 

// Error 
// mostrarCampo("direccion");



/*
===========================================
6. ERRORES COMUNES
===========================================
*/

// ERROR 1:
// Creer que keyof funciona con valores

const nombre = "Samuel";

// Incorrecto 
// type Test = keyof nombre

/*
¿Por qué falla?

Porque keyof necesita un TIPO u objeto,
no un string simple.
*/


// ERROR 2:
// Confundir typeof con keyof

/*
typeof pregunta:
"¿Qué tipo tiene esto?"

keyof pregunta:
"¿Qué propiedades tiene este tipo?"
*/


/*
===========================================
RESUMEN FINAL
===========================================

keyof:

1. Recibe un tipo
2. Extrae sus propiedades
3. Devuelve una unión de strings

Ejemplo:

type Usuario = {
  nombre: string;
  edad: number;
}

keyof Usuario

Resultado:

"nombre" | "edad"

Piensa en keyof como:

Un inspector de etiquetas 
Mira un objeto y dice:
"Estas son todas las llaves que tiene"
*/



