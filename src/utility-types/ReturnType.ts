// return-type.ts

/*
========================================
RETURNTYPE<T>
========================================

ReturnType obtiene el tipo que
retorna una función.

Function
↓
ReturnType
↓
Tipo de retorno
*/


/*
Ejemplo 1
*/

function saludar() {
  return "Hola"
}

type Resultado = ReturnType<typeof saludar> // String




/*
Ejemplo 2
*/

function sumar(a: number, b: number) {
  return a + b
}

type SumaResult = ReturnType<typeof sumar> // Number


/*
Ejemplo 3
Retorno con objeto
*/

function crearUsuario() {
  return {
    id: 1,
    name: "Samuel"
  }
}

type User = ReturnType<typeof crearUsuario>

/*
Resultado:

{
  id: number
  name: string
}
*/



/*
Ejemplo 4
Con async
*/

async function obtenerNombre() {
  return "Samuel"
}

type AsyncResult = ReturnType<typeof obtenerNombre>

/*
Resultado:
Promise<string>

Ojo:
NO devuelve string
porque async siempre retorna Promise
*/
