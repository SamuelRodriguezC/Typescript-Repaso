// template-literal-types.ts

// =====================================================
// 1. TEMPLATE LITERAL TYPE BÁSICO
// =====================================================

// Sintaxis:
// type NuevoTipo = `texto${Tipo}texto`;

type Name = "Samuel";
type Greeting = `Hola ${Name}`;

type Result = Greeting;
// "Hola Samuel"


// -----------------------------------------------------
// TypeScript literalmente construyó:
// "Hola Samuel"
// -----------------------------------------------------



// =====================================================
// 2. CON UNIONS (AQUÍ SE PONE INTERESANTE)
// =====================================================

type Lang = "es" | "en";
type Key = "welcome";

// TypeScript combina todo automáticamente
type TranslationKey = `${Lang}_${Key}`;

// Resultado:
// "es_welcome" | "en_welcome"

let key: TranslationKey;

key = "es_welcome"; // ✅
key = "en_welcome"; // ✅

// key = "fr_welcome"; ❌



// =====================================================
// 3. MÚLTIPLES UNIONS
// =====================================================

type Vertical = "top" | "bottom";
type Horizontal = "left" | "right";

type Position = `${Vertical}-${Horizontal}`;

// Resultado:
// "top-left"
// "top-right"
// "bottom-left"
// "bottom-right"

let pos: Position;

pos = "top-left"; // ✅
// pos = "center"; ❌



// =====================================================
// 4. CASO REAL: CSS CLASSES
// =====================================================

type Size = "sm" | "md" | "lg";
type ButtonClass = `btn-${Size}`;

// Resultado:
// "btn-sm" | "btn-md" | "btn-lg"

let btn: ButtonClass;

btn = "btn-sm"; // ✅
// btn = "btn-xl"; ❌



// =====================================================
// 5. CON KEYS DE OBJETOS
// =====================================================

type Events = "click" | "hover";

type EventName = `on${Capitalize<Events>}`;

// Capitalize transforma:
// click -> Click
// hover -> Hover

// Resultado:
// "onClick" | "onHover"

let event: EventName;

event = "onClick"; // ✅
event = "onHover"; // ✅



// =====================================================
// RESUMEN MENTAL
// =====================================================

// Esto:
type Clase = `btn-${"sm" | "lg"}`;

// Produce:
type ResultadoFinal = "btn-sm" | "btn-lg";