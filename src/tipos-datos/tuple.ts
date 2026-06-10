// Una tupla es un arreglo donde cada posición
//  tiene un tipo específico.

// El orden importa.

// ARREGLO CONVENCIONAL
let datos: (string | number)[] = ["Samuel", 25]; 
// Puede estar en cualquier orden


let datosTuple: [string, number] = ["Samuel", 19]; 
// let datosTuple2: [string, number] = [19, "Samuel"]; ERROR 



// TUPLA COMO RESPUESTA DE UNA FUNCIÓN 
function getUser(): [number, string] {
    return [1, "Samuel"];
}

