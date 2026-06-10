// Es el hermano responsable de any.


// Con any:

let dato: any = "Hola";

dato.toUpperCase();
dato.edad;
dato();

// TODO PERMITIDO PERO PELIGROSO 



// Con unknown:
let dato2: unknown = "Hola";
dato.toUpperCase();
//  Error
// TypeScript dice:
// "Primero verifica qué tipo es."


if (typeof dato === "string") {
    console.log(dato.toUpperCase());
}



// ¿Cuándo usarlo?

// Cuando no sabes qué llegará.

// Por ejemplo:

// const response: unknown = await fetch(...);


/* 
Por eso unknown se usa más cuando no confías
 en los datos que llegan o cuando aún no sabes 
 exactamente qué estructura tiene la respuesta.
  Es una alternativa mucho más segura que any. 
*/ 