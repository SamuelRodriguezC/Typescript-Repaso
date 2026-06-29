// non-nullable.ts

/*
========================================
NONNULLABLE<T>
========================================

NonNullable elimina:
- null
- undefined

de un tipo.
*/


/*
Ejemplo 1
*/

type Nombre = string | null | undefined

/*
Nombre puede ser:
- "Samuel"
- null
- undefined
*/


type NombreLimpio = NonNullable<Nombre>

/*
Resultado:
string
*/


/*
----------------------------------------
Ejemplo 2
----------------------------------------
*/

type Edad = number | null

type EdadValida = NonNullable<Edad>

/*
Resultado:
number
*/


/*
----------------------------------------
Ejemplo 3
Con objetos
----------------------------------------
*/

type User = {
  name: string | null
}

/*
User["name"] obtiene el tipo
de la propiedad name
*/

type SafeName = NonNullable<User["name"]>

/*
Resultado:
string
*/


/*
----------------------------------------
Ejemplo 4
Caso real
----------------------------------------
*/

type ApiResponse = {
  email: string | null
}

/*
Supongamos que después de validar
sabemos que email ya existe
*/

type ValidEmail = NonNullable<ApiResponse["email"]>

/*
Resultado:
string
*/


/*
========================================
RESUMEN MENTAL
========================================

string | null | undefined
          ↓
    NonNullable
          ↓
       string


null / undefined = vacío
NonNullable      = limpia el tipo
*/