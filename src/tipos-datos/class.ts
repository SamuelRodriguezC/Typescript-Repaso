// MOLDE PARA CREAR OBJETOS


enum Geneder {
    Male = 1,
    Female = 2,
}

class User {
    name: string;
    age: number;
    gender: Geneder;

    constructor(name: string, age: number, gender: Geneder) {
        this.name = name; 
        this.age = age;
        this.gender = gender;
    }

    // MÉTODO 
    greet(): string {
        return `Hola ${this.name}`
    }
}

// CREAR OBJETOS
const user1 = new User("Samuel", 25, Geneder.Male); 
const user2 = new User("Manuela", 25, Geneder.Female)

// USAR MÉTODOS 
let saludoUser: string = user1.greet();
console.log(saludoUser)

