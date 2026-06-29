"use strict";
// instance-type.ts
Object.defineProperty(exports, "__esModule", { value: true });
/*
========================================
INSTANCETYPE<T>
========================================

Obtiene el tipo del objeto creado
por un constructor/clase.

Es más útil cuando NO conoces
la clase exacta y trabajas con
constructores genéricos.
*/
/*
========================================
SIMULACIÓN 1
Factory genérica
========================================
*/
class User {
    name = "Samuel";
}
class Car {
    brand = "Toyota";
}
function createInstance(Clase) {
    return new Clase();
}
const user = createInstance(User);
const car = createInstance(Car);
/*
TypeScript infiere:

user -> User
car  -> Car

Sin InstanceType:
la función no sabría el tipo exacto
del objeto retornado
*/
/*
========================================
SIMULACIÓN 2
Sistema de plugins
========================================
*/
class LoggerPlugin {
    log() {
        console.log("Logging...");
    }
}
class AuthPlugin {
    login() {
        console.log("Login...");
    }
}
function loadPlugin(PluginClass) {
    return new PluginClass();
}
const logger = loadPlugin(LoggerPlugin);
const auth = loadPlugin(AuthPlugin);
/*
logger -> LoggerPlugin
auth   -> AuthPlugin

Esto es útil cuando tu sistema
puede cargar plugins distintos
dinámicamente
*/
/*
========================================
SIMULACIÓN 3
Dependency Injection
========================================
*/
class DatabaseService {
    connect() {
        console.log("Connected");
    }
}
class EmailService {
    send() {
        console.log("Email sent");
    }
}
function resolve(Service) {
    return new Service();
}
const db = resolve(DatabaseService);
const email = resolve(EmailService);
/*
db    -> DatabaseService
email -> EmailService

Muy común en frameworks
*/
/*
========================================
RESUMEN MENTAL
========================================

Caso simple:

InstanceType<typeof User>
-> redundante (ya sabes que da User)

Caso real:

T extends Constructor
-> no sabes qué clase es

Ahí InstanceType sí brilla
*/ 
//# sourceMappingURL=InstanceType.js.map