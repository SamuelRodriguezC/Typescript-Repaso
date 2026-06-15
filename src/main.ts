// Extensión de interfaces 


interface Cuadrupedos {
    readonly id: number; 
    name: string;
    entorno: string
}

interface Perro extends Cuadrupedos {
    raza: string,
    color?: string,
}

const max: Perro = {id: 15, name: "MAX", entorno: "Hogar", raza: "shnauzer"}



interface Nose {
    [atributo: string]: number
}

const nosep: Nose = {
     edad: 45,
     velociadad: 50,
}