"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// ========================================
// 1. CLASS DECORATOR
// Se ejecuta cuando se declara la clase
// ========================================
function Logger(constructor) {
    console.log(`Class Decorator -> Clase detectada: ${constructor.name}`);
}
// ========================================
// 2. PROPERTY DECORATOR
// Se ejecuta cuando TS encuentra una propiedad
// ========================================
function Required(target, propertyKey) {
    console.log(`Property Decorator -> Propiedad requerida: ${propertyKey}`);
}
// ========================================
// 3. METHOD DECORATOR
// Se ejecuta cuando TS encuentra un método
// ========================================
function LogMethod(target, methodName, descriptor) {
    console.log(`Method Decorator -> Método detectado: ${methodName}`);
    // Guardamos el método original
    const originalMethod = descriptor.value;
    // Sobrescribimos el método para agregar lógica extra
    descriptor.value = function (...args) {
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
function LogAccessor(target, accessorName, descriptor) {
    console.log(`Accessor Decorator -> Accessor detectado: ${accessorName}`);
}
// ========================================
// 5. PARAMETER DECORATOR
// Decora parámetros de métodos
// ========================================
function ParamInfo(target, methodName, parameterIndex) {
    console.log(`Parameter Decorator -> Parámetro #${parameterIndex} en ${methodName}`);
}
// ========================================
// CLASE DE EJEMPLO
// Aquí usamos TODOS los decoradores
// ========================================
let Persona = class Persona {
    nombre;
    _edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
    saludar(mensaje) {
        return `${mensaje}, soy ${this.nombre}`;
    }
};
__decorate([
    Required
], Persona.prototype, "nombre", void 0);
__decorate([
    LogAccessor
], Persona.prototype, "edad", null);
__decorate([
    LogMethod,
    __param(0, ParamInfo)
], Persona.prototype, "saludar", null);
Persona = __decorate([
    Logger
], Persona);
// ========================================
// EJECUCIÓN
// ========================================
const persona = new Persona("Samuel", 22);
console.log(persona.edad);
console.log(persona.saludar("Hola"));
//# sourceMappingURL=decorators.js.map