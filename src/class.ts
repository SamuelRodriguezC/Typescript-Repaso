// Molde para crear objetos (tiene forma Y COMPORTAMIENTO )
// A diferencia de las interfaces tienen COMPORTAMIENDO - METODOS


// Interface = contrato o plano de construcción.
// Clase = objeto real que puede tener constructor, propiedades y métodos.

class Car {
    readonly id: number; 
    brand: string; 
    model: string;
    color: string; 
    offRoad: boolean;


    constructor(id: number, brand: string, model: string, color: string, offRoad?: boolean){
        this.id = id; 
        this.brand = brand; 
        this.model = model,
        this.color = color,
        this.offRoad = offRoad ?? false; 
    }
}


// Forma corta IGUAL FUNCIONAMIENTO
class User {
    constructor(
        public name: string,
        public age: number,
        public gender: string
    ) {}

    greet(): string {
        return `Hola ${this.name}`;
    }
}


// PROTECTED, PRIVATE Y PULBIC 
class Vehiculo {
    public marca: string;         // Accesible desde cualquier lugar
    protected modelo: string;     // Accesible aquí y en clases hijas
    private numeroSerie: string;  // Solo accesible en esta clase

    constructor(marca: string, modelo: string, serie: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.numeroSerie = serie;
    }

    public obtenerInfo(): string {
        return `${this.marca} - ${this.modelo}`;
    }
}

class Auto extends Vehiculo {
    constructor(marca: string, modelo: string, serie: string) {
        super(marca, modelo, serie);
        
        // Válido: 'modelo' es protected y está en una subclase
        this.modelo = "Nuevo Modelo"; 
        
        // Error: 'numeroSerie' es private y no se puede heredar
        // this.numeroSerie = "1234"; 
    }
}

const miAuto = new Auto("Toyota", "Corolla", "SN-999");

// Válido: 'marca' es public
console.log(miAuto.marca); 

// Error: 'modelo' es protected, no accesible desde afuera
// console.log(miAuto.modelo); 

// Error: 'numeroSerie' es private, no accesible desde afuera
// console.log(miAuto.numeroSerie);
