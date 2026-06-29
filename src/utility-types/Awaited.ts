
// awaited.ts

/*
========================================
AWAITED<T>
========================================

Awaited extrae el tipo que está
dentro de una Promise.

Piensa:

Promise<string>
↓
Awaited
↓
string
*/


/*
Ejemplo 1: Promise simple
*/

type NombrePromise = Promise<string>

// Sin Awaited:
// Promise<string>

// Con Awaited:
type Nombre = Awaited<NombrePromise>

// Resultado:
// string



/*
Ejemplo 2: con una función async
*/

async function obtenerUsuario() {
  return "Samuel"
}

/*
Una función async SIEMPRE retorna Promise.

Aunque parezca que retorna:
string

En realidad retorna:
Promise<string>
*/


/*
ReturnType obtiene lo que retorna
la función
*/

type TipoRetorno = ReturnType<typeof obtenerUsuario>

// Resultado:
// Promise<string>



/*
Awaited abre la Promise y saca
el tipo real
*/

type Usuario = Awaited<TipoRetorno>

// Resultado:
// string



/*
Ejemplo 3: Promise con objeto
*/

type UserPromise = Promise<{
  id: number
  name: string
}>

type User = Awaited<UserPromise>

// Resultado:
/*
{
  id: number
  name: string
}
*/



/*
RESUMEN MENTAL
========================================

Promise  -> caja cerrada 
await    -> abre la caja en runtime
Awaited  -> abre la caja en tipos
*/