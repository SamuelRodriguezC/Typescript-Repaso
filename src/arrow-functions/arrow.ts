// Sirven para escribir funciones de manera más corta y más limpia 
// Permiten omitir usar la palabra function, las llaves y no escribir directamente return (hacen return implicito)

const puntajes: number[] = [32, 435, 23452, 234, 5466, 35, 234,678,234,65798]

// (x) => x * 5 :
// Esta función recibe parámetros y retorna automáticamente el resultado despues de => 
const punajesDoblados = puntajes.map((n) => n * 5) // Toma cada número y lo multiplica por dos (map recibe una función callback)


// ({propiedad, propiedad} => retorno): permite obtener las propiedades de
//  un objeto directemnte desde la función "destructuring"
type user = {
    id: number,
    username: string,
    email:string,
    password: string,
}

// Creamos el objeto tipo user
const samu: user = {
    id: 21, 
    username: "samueloo",
    email: "samuelo@gmail.com",
    password: "************"
}

//Arrow function 
const saludo = (user: user) => "Hola! " + user.email + "Tu correo es" + user.email;
console.log(saludo(samu)) // Hola! samuelo@gmail.comTu correo essamuelo@gmail.com

// DESTRUCURING 
const obtenerNombre = ({username}: user) => username; //Obtener la propiuedad desde la función (destructuring)
console.log(obtenerNombre(samu))