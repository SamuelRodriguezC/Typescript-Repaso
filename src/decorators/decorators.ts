// ========================================
// DECORADORES EN TYPESCRIPT
// ========================================
//
// Concepto:
// Un decorador es una función especial que
// se ejecuta cuando TypeScript procesa una
// clase o uno de sus miembros.
//
// Sirven para:
// - Agregar comportamiento extra
// - Validaciones
// - Logs
// - Metadata
//
// Recuerda activar en tsconfig.json:
// "experimentalDecorators": true
// ========================================



// ========================================
// 1. CLASS DECORATOR
// Se ejecuta cuando se declara la clase
// ========================================
function Logger(constructor: Function) {
    console.log(`Class Decorator -> Clase detectada: ${constructor.name}`);
}



// ========================================
// 2. PROPERTY DECORATOR
// Se ejecuta cuando TS encuentra una propiedad
// ========================================
function Required(target: any, propertyKey: string) {
    console.log(`Property Decorator -> Propiedad requerida: ${propertyKey}`);
}



// ========================================
// 3. METHOD DECORATOR
// Se ejecuta cuando TS encuentra un método
// ========================================
function LogMethod(
    target: any,
    methodName: string,
    descriptor: PropertyDescriptor
) {
    console.log(`Method Decorator -> Método detectado: ${methodName}`);

    // Guardamos el método original
    const originalMethod = descriptor.value;

    // Sobrescribimos el método para agregar lógica extra
    descriptor.value = function (...args: any[]) {
        console.log(`Ejecutando ${methodName} con args:`, args);

        const result = originalMethod.apply(this, args);

        console.log(`Resultado: ${result}`);

        return result;
    };
}



// ========================================
// 4. ACCESSOR DECORATOR
// Se usa en getters/setters
// ========================================
function LogAccessor(
    target: any,
    accessorName: string,
    descriptor: PropertyDescriptor
) {
    console.log(`Accessor Decorator -> Accessor detectado: ${accessorName}`);
}



// ========================================
// 5. PARAMETER DECORATOR
// Decora parámetros de métodos
// ========================================
function ParamInfo(
    target: any,
    methodName: string,
    parameterIndex: number
) {
    console.log(
        `Parameter Decorator -> Parámetro #${parameterIndex} en ${methodName}`
    );
}



// ========================================
// CLASE DE EJEMPLO
// Aquí usamos TODOS los decoradores
// ========================================
@Logger
class Persona {

    @Required
    nombre: string;

    private _edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this._edad = edad;
    }

    @LogAccessor
    get edad() {
        return this._edad;
    }

    @LogMethod
    saludar(@ParamInfo mensaje: string) {
        return `${mensaje}, soy ${this.nombre}`;
    }
}



// ========================================
// EJECUCIÓN
// ========================================
const persona = new Persona("Samuel", 22);

console.log(persona.edad);

console.log(persona.saludar("Hola"));