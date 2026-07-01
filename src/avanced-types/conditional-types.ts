// conditional-types.ts
// ==========================================
// CONDITIONAL TYPES EN TYPESCRIPT
// ==========================================

// Idea principal:
// Son operadores ternarios PERO para tipos.
//
// Fórmula:
//
// T extends U ? X : Y
//
// Se lee:
// "Si T es compatible con U -> usa X"
// "Si no -> usa Y"



// ==========================================
// 1) Ejemplo básico
// ==========================================

type IsString<T> = T extends string ? true : false

type A = IsString<string> // true
type B = IsString<number> // false

// TS pregunta:
// string extends string ? -> sí -> true
// number extends string ? -> no -> false



// ==========================================
// 2) Uso real con generics
// ==========================================

// Según el tipo de entrada,
// devuelve un tipo diferente

type Label<T> = T extends number ? "IdLabel" : "NameLabel"

type L1 = Label<number> // "IdLabel"
type L2 = Label<string> // "NameLabel"



// ==========================================
// 3) Conditional + constraints
// ==========================================

// Queremos obtener message solo si existe

type MessageOf<T> =
  T extends { message: unknown }
    ? T["message"]
    : never

type Email = {
  message: string
}

type Dog = {
  bark: boolean
}

type M1 = MessageOf<Email> // string
type M2 = MessageOf<Dog>   // never

// Explicación:
// ¿Email tiene message? Sí -> string
// ¿Dog tiene message? No -> never



// ==========================================
// 4) Flatten
// ==========================================

// Si es array -> dame el tipo interno
// Si no -> déjalo igual

type Flatten<T> =
  T extends any[]
    ? T[number]
    : T

type F1 = Flatten<string[]> // string
type F2 = Flatten<number>   // number

// string[] -> extrae string



// ==========================================
// 5) infer
// ==========================================

// infer = "TypeScript, adivina esto por mí"

type Flatten2<T> =
  T extends Array<infer Item>
    ? Item
    : T

type X = Flatten2<number[]> // number

// TS ve:
// Array<number>
//
// Entonces deduce:
// Item = number



// ==========================================
// 6) infer para return type
// ==========================================

type GetReturnType<T> =
  T extends (...args: any[]) => infer Return
    ? Return
    : never

type R1 = GetReturnType<() => string> // string
type R2 = GetReturnType<() => number> // number

// Muy usado en utility types



// ==========================================
// 7) Distributive Conditional Types
// ==========================================

// MUY IMPORTANTE

type ToArray<T> =
  T extends any
    ? T[]
    : never

type Arr = ToArray<string | number>

// Resultado:
// string[] | number[]

// NO:
// (string | number)[]


// ¿Por qué?
// Porque TS distribuye unions automáticamente

// Hace esto mentalmente:
//
// ToArray<string> |
// ToArray<number>



// ==========================================
// 8) Cómo desactivar distributividad
// ==========================================

type ToArrayNoDist<T> =
  [T] extends [any]
    ? T[]
    : never

type Arr2 = ToArrayNoDist<string | number>

// Resultado:
// (string | number)[]

// Ahora NO separa la union
