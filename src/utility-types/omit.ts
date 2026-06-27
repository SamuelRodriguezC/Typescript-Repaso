//Permite seleccionar todas las propiedades de un objeto, excepto las que se pasen en <>
// es el opuesto a Pick en donde seleccionas cuales propiedades quieres tener 

interface User{
     readonly id: number;
     username: string;
     email: string; 
     password: string;
     created_at: Date; 
}


//Este objeto tendría todas las propiedades de user menos password y se le agrega permissions
interface logUser extends Omit<User, 'password'> {
    permisions: string
}