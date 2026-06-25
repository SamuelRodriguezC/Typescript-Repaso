/* 
Sirve para convertir todas las propiedades de un tipo en propiedades opcionales ? 
*/ 

interface User{
    id: number;
    username: string;
    passsword: string;
}


type UserOptional = Partial<User>


// Se deben pasar todos lo parámetros para cumplir con el contrato
const user1: User = {id:21, username: "samuelo", passsword: "AW&45324234"} 

//Como este es un tipo que es partial todas sus propiedades son opcionales 
//por lo que no es necesario pasarle todos los parámetros
const myuser: UserOptional = {id: 32} 


// Para que sirve? 
// Se usa cuando queremos hacer as propiedades opcionales sin cambiar directamente el tipo

// Se tiene que recibir un id pero cualquiera de los datos que se pueden recibir de la interfaz User son opcionales
// Permitiendo actualizar solo los datos que se pasen
function UpdateUser(id: number, data: Partial<User>){
   //Lógica para actuializar solo lo que venga 
}

UpdateUser(21, {username: "samuelooo1234"}) //Aquí le podemos pasar cualquier propiedad de user opcionalmente 




//Ejemplo más claro 
interface Auto {
    id: number; 
    color: string; 
    placa: string;
    seguro: boolean;
}

//Crear un arreglo de objetos tipo Auto
const autosReault: Array<Auto> = [
    {id: 21, color: "gris", placa: "EDS-234", seguro: true},
    {id: 12, color: "azul", placa: "WES-753", seguro: true},
    {id: 32, color: "verde", placa: "TSD-235", seguro: false},
    {id: 43, color: "marron", placa: "SBF-976", seguro: true},
    {id: 67, color: "gris", placa: "WER-240", seguro: false},
] 

console.log(autosReault[0])

// Recibir el id obligatorio para identificar el objeto y atributos opcionales de la interfaz para actualizarlos
function updateAuto(id: number, data: Partial<Auto>){

    // Buscar en el array un objeto que conicida con el id proporcionado
    const auto = autosReault.find(a => a.id === id)

    // Si no hay un auto con ese id
    if(!auto){
        console.log("El usuario no existe")
        return;
    }

    // Asignar al objeto con id tal, la data tal 
    Object.assign(auto, data)
}

//actualizar usuario
updateAuto(21, { color: "Rojo", placa: "PDS-567" });

console.log(autosReault[0])
