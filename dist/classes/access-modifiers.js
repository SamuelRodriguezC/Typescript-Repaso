"use strict";
// Controlan la visivilidad de 
// Métodos y atributos de una clase
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    username;
    password;
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
}
class Empleado extends User {
    constructor(id, username, password, cargo) {
        super(id, username, password);
    }
    getCargo() {
        // Solo puede acceder a username o password id es privado
        // console.log(this.id) // ERRO
        console.log(this.username + this.password);
    }
}
class Comercial {
    user;
    constructor(user) {
        this.user = user;
    }
    mostrarNombre() {
        //  ERROR: no se puede acceder a protected desde otra clase no hija
        // console.log(this.user.password);
    }
}
//# sourceMappingURL=access-modifiers.js.map