"use strict";
// MOLDE PARA CREAR OBJETOS
Object.defineProperty(exports, "__esModule", { value: true });
var Geneder;
(function (Geneder) {
    Geneder[Geneder["Male"] = 1] = "Male";
    Geneder[Geneder["Female"] = 2] = "Female";
})(Geneder || (Geneder = {}));
class User {
    name;
    age;
    gender;
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // MÉTODO 
    greet() {
        return `Hola ${this.name}`;
    }
}
// CREAR OBJETOS
const user1 = new User("Samuel", 25, Geneder.Male);
const user2 = new User("Manuela", 25, Geneder.Female);
// USAR MÉTODOS 
let saludoUser = user1.greet();
console.log(saludoUser);
//# sourceMappingURL=class.js.map