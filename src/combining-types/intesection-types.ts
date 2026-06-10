// Un tipo de intersección crea un nuevo tipo combinando varios tipos existentes.
//  El nuevo tipo posee todas las características de los tipos existentes.

// Para combinar tipos, se utiliza el &operador de la siguiente manera:

// TIPOS INDIVIDUALES 
interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}


// AHORA CREAMOS DOS TIPOS DE INTERSECCIÓN 
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

// CREAMOS UN EMPLEADO 
let e: Employee = {
    id: 100,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(408)-897-5684'
};

// CREAMOS UN CUSTOMER 
let c: Customer = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};



// Resumen
// Un tipo de intersección combina dos o más tipos 7
// para crear un nuevo tipo que posee todas las
//  propiedades de los tipos existentes.
// El orden de los tipos no es importante cuando se combinan tipos.



// REPASO 
// intersectio types es crear un objeto que tenga la combinación de dos tipos,
// tiene que ser los dos tipos a la ves 

interface Animal {
    nombre: string;
    habitat: string; 
    clima: string; 
    edad: number
}

interface Mamifero {
    diasGestacion: number,
    pelaje: string,
}

type Perro = Animal & Mamifero;

let maximiliano: Perro = {
    nombre: "maximiliano", 
    habitat: "Casa jaja",
    clima: "tropical",
    edad: 8,
    diasGestacion: 68,
    pelaje: "Blanco"
}

