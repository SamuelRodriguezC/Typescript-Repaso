// parameters.ts

/*
========================================
PARAMETERS<T>
========================================

Extrae los parámetros de una función
y los devuelve como una tupla.

Function
↓
Parameters
↓
[param1, param2, ...]
*/


/*
Ejemplo 1
*/

function saludar(nombre: string, edad: number) {}

type Params = Parameters<typeof saludar>

// Resultado:
// [string, number]



/*
Ejemplo 2
Reutilizar parámetros
*/

function login(email: string, password: string) {}

type LoginParams = Parameters<typeof login>

function validar(...args: LoginParams) {
  console.log(args)
}



/*
RESUMEN MENTAL
========================================

ReturnType -> qué retorna una función
Parameters -> qué recibe una función
*/