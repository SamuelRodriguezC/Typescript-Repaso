/**
 * ALIAS DE TIPO (TYPE ALIAS)
 *
 * Un alias de tipo es un nombre personalizado
 * que le damos a un tipo existente.
 *
 * Piensa en él como un APODO para un tipo.
 */

// Sin alias
let nombre: string = "Samuel";

// Con alias
type Nombre = string;

let usuario: Nombre = "Samuel";

/*
 * Nombre no es un nuevo tipo.
 * Sigue siendo un string.
 * Solo tiene un nombre más fácil de reutilizar.
 */

// -----------------------------------

// Alias para una unión de tipos

type Id = string | number;

let idUsuario: Id = 123;
idUsuario = "ABC123";

/*
 * Id significa:
 * string O number
 */

// -----------------------------------

// Alias para objetos

type Persona = {
    nombre: string;
    edad: number;
};

let persona: Persona = {
    nombre: "Samuel",
    edad: 20
};

/*
 * Persona es el apodo de este objeto:
 * {
 *   nombre: string;
 *   edad: number;
 * }
 */

// -----------------------------------

// Alias para arreglos

type ListaNombres = string[];

let nombres: ListaNombres = [
    "Samuel",
    "Juan",
    "Pedro"
];

/*
 * ListaNombres es el apodo de:
 * string[]
 */