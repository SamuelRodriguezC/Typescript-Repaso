// ALIAS DE TIPOS 
type Usuario = {
  nombre: string;
  edad: number;
  correo?: string; // Propiedad opcional
};




let estado: "loading" | "success" | "error";
estado = "loading"; //BIEN
estado = "pendiente"; // ERROR