// Sirve para crear tipos en donde hay muchas keys con un solo tipo 
// y muchos values que tienen un solo tipo 
// Es básucmanete un diccionario tipado 

//Record<TipoKeys, TipoValues> key: value
type Roles = Record<string, string> //Todas las keys serán tipo string al igual que todos los values 
const rol: Roles = {"id": "", "email": ""}


//Valores literales
type Perro = Record<"Shnaizer" | "Frenchpuddle", string> // Solo acepta Keys "Shnaizer" y "Frenchpuddle"(obligatoria) y values de tipo string 
const Max: Perro = {"Shnaizer": "MAAX", "Frenchpuddle": "Maxmililinaod"}



 // Solo acepta los nombres como keys y deben tener arreglos de tipos number en su valor
type Ganadores = Record<"maria" | "pedro" | "lucas", number[]>
const puntajes: Ganadores = {
    "maria": [3, 6, 4, 7, 7],
    "pedro": [4, 9, 3, 4, 7],
    "lucas": [3, 6, 5, 8, 5],
    // "mateo": [4, 7, 7, 9, 9] No se puede por que el tipo no tiene definida la key "mateo"
}



// Varios tipos
type campeonato = Record< "partidosJugados" | "ganador", number | string > //las claves pueden tener valores con tipos number o string
const campeonatoSuba: campeonato = {
    "partidosJugados": 32,  // Este valor también puede ser un number así que Ojo con esto number | string 
    "ganador": "Juanito" // Este valor también puede ser un number así que Ojo con esto number | string 
}