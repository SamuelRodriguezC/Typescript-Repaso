interface User {
  id: number;
  name: string;
}

const user: Readonly<User> = {
  id: 1,
  name: "Samuel"
};

console.log(user.name); // ✅ Se puede leer

// user.name = "Carlos";
// ❌ No se puede modificar