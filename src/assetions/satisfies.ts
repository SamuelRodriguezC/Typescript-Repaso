/**
 * ==========================================
 * SATISFIES
 * ==========================================
 *
 * Significa:
 *
 * "Verifica que este objeto cumpla
 * una estructura, pero conserva
 * sus tipos originales."
 *
 * Es como mostrar una credencial:
 *
 * TypeScript revisa que cumplas
 * los requisitos antes de dejarte pasar.
 */

// ------------------------------------------
// EL CONTRATO
// ------------------------------------------

type User = {
    name: string;
    age: number;
};


// ------------------------------------------
// OBJETO VÁLIDO
// ------------------------------------------

const user = {
    name: "Samuel",
    age: 25
} satisfies User;

/*
TypeScript revisa:

- Tiene name
- Tiene age
- Los tipos son correctos

Todo bien.
*/


// ------------------------------------------
// OBJETO INVÁLIDO
// ------------------------------------------

const user2 = {
    name: "Samuel"
} satisfies User;

/*
 Error

Falta la propiedad age
*/


// ------------------------------------------
// OTRO ERROR
// ------------------------------------------

const user3 = {
    name: "Samuel",
    age: "25"
} satisfies User;

/*
 Error

age debe ser number
y no string
*/


// ------------------------------------------
// DIFERENCIA CON "as"
// ------------------------------------------

const user4 = {
    name: "Samuel"
} as User;

/*
⚠️ TypeScript confía en ti.

Le estás diciendo:

"Créeme, esto es un User."

Aunque realmente falte age.
*/


const user5 = {
    name: "Samuel"
} satisfies User;

/*
❌ TypeScript NO confía.

Primero verifica que cumpla
la estructura User.
*/


// ------------------------------------------
// EJEMPLO MUY COMÚN
// ------------------------------------------

type Config = {
    apiUrl: string;
    timeout: number;
};

const config = {
    apiUrl: "https://api.com",
    timeout: 5000
} satisfies Config;

/*
 Cumple el contrato Config
*/


// ------------------------------------------
// RESUMEN
// ------------------------------------------

/*
satisfies Tipo

Traducción:

"Comprueba que este objeto
cumpla la estructura Tipo."

Ejemplo:

const user = {
    name: "Samuel",
    age: 25
} satisfies User;

TypeScript responde:

✅ Sí cumple User
*/