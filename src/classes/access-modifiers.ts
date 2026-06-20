// Controlan la visivilidad de 
// Métodos y atributos de una clase


class User {
    constructor (
        private id: number,
        public username: string,
        protected password: string,
    ) {}
}

class Empleado extends User {
    constructor (
        id: number,
        username: string,
        password: string,
        cargo: string
    ){
        super(id, username, password)
    }
    
    getCargo () {
        // Solo puede acceder a username o password id es privado
        // console.log(this.id) // ERRO
        console.log(this.username + this.password)
    } 
}


class Comercial {
    private user: User;

  constructor(user: User) {
    this.user = user;
  }

  mostrarNombre() {
    //  ERROR: no se puede acceder a protected desde otra clase no hija
    // console.log(this.user.password);
  }
}