// PERMITE PREGUNTAR ESTA PROPIEDAD EXISTE EN ESTE OBJETO? 

const usuario = {
  nombre: "Samuel",
  edad: 21
};

console.log("nombre" in usuario); // true
console.log("email" in usuario);  // false