// mapped-types.ts
// ======================================
// MAPPED TYPES EN TYPESCRIPT
// ======================================

// Idea principal:
// Un Mapped Type recorre las propiedades de un tipo
// y crea un NUEVO tipo basado en él.
//
// Fórmula mental:
//
// [K in keyof T] modificadores : valor
//
// Preguntas:
// 1. ¿Qué recorro? -> keyof T
// 2. ¿Dónde guardo la key actual? -> K
// 3. ¿Qué modifico? -> ?, readonly
// 4. ¿Qué tipo asigno? -> T[K], string, boolean, etc



// ======================================
// 1) Tipo base
// ======================================

type User = {
  name: string
  age: number
}



// ======================================
// 2) Mapped Type básico
// ======================================

type Copy<T> = {
  [K in keyof T]: T[K]
}

// Recorre:
// "name" | "age"
//
// Resultado:
// {
//   name: string
//   age: number
// }

type CopiedUser = Copy<User>



// ======================================
// 3) Cambiar TODOS los valores a boolean
// ======================================

type BooleanFlags<T> = {
  [K in keyof T]: boolean
}

// Ignora el tipo original y pone boolean

type UserFlags = BooleanFlags<User>

// Resultado:
// {
//   name: boolean
//   age: boolean
// }



// ======================================
// 4) Optional modifier (?)
// ======================================

type Optional<T> = {
  [K in keyof T]?: T[K]
}

// Hace TODAS las propiedades opcionales

type PartialUser = Optional<User>

// {
//   name?: string
//   age?: number
// }



// ======================================
// 5) Readonly modifier
// ======================================

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K]
}

type LockedUser = ReadOnly<User>

// Ya no puedes hacer:
// user.name = "nuevo" ❌



// ======================================
// 6) Quitar readonly (-readonly)
// ======================================

type RemoveReadonly<T> = {
  -readonly [K in keyof T]: T[K]
}

type LockedAccount = {
  readonly id: string
  readonly email: string
}

type EditableAccount = RemoveReadonly<LockedAccount>

// readonly fue removido



// ======================================
// 7) Quitar optional (-?)
// ======================================

type RemoveOptional<T> = {
  [K in keyof T]-?: T[K]
}

type MaybeUser = {
  id?: number
  name?: string
}

type RealUser = RemoveOptional<MaybeUser>

// Resultado:
// {
//   id: number
//   name: string
// }



// ======================================
// 8) Key Remapping (as)
// ======================================
// Renombrar propiedades

type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}

type UserGetters = Getters<User>

// Resultado:
// {
//   getName: () => string
//   getAge: () => number
// }



// ======================================
// 9) Filtrar keys usando never
// ======================================

type RemoveAge<T> = {
  [K in keyof T as Exclude<K, "age">]: T[K]
}

type UserWithoutAge = RemoveAge<User>

// Resultado:
// {
//   name: string
// }



// ======================================
// 10) Mapear unions complejas
// ======================================
// No solo strings; también objetos

type SquareEvent = {
  kind: "square"
  x: number
}

type CircleEvent = {
  kind: "circle"
  radius: number
}

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void
}

type Config = EventConfig<SquareEvent | CircleEvent>

// Resultado:
// {
//   square: (event: SquareEvent) => void
//   circle: (event: CircleEvent) => void
// }



// ======================================
// 11) Conditional Types + Mapped Types
// ======================================

type DBFields = {
  id: { pii: false }
  email: { pii: true }
}

type ExtractPII<T> = {
  [K in keyof T]: T[K] extends { pii: true } ? true : false
}

type GDPR = ExtractPII<DBFields>

// Resultado:
// {
//   id: false
//   email: true
// }



// ======================================
// RESUMEN FINAL
// ======================================

// keyof T     -> obtiene keys
// K           -> key actual
// T[K]        -> tipo de esa key
// ?           -> opcional
// readonly    -> solo lectura
// -?          -> quita optional
// -readonly   -> quita readonly
// as          -> renombra keys
// never       -> elimina keys