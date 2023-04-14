export class Alumno {
    constructor(username, dni) {
      this.username = username;
      this.dni = dni;
    }
    mostrar() {
        return console.log(this.username + ' ' + this.dni);
    }
  }
