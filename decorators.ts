function log(target, key ) {          // el decorador. Target hace representacion al elemento que contenga al elemento que estamos extendiendo su funcionalidad. En este caso la clase Persona. Key hace referencia al elemento en este caso sayMyName
  console.log(key + 'se ha llamado'); // sayMyNmae se ha llamado
}

class Persona {
  private name: string;
  constructor(name: string) {
    this.name = name
  }
  
  @log
  sayMyName() {
   console.log(this.name);
  }
}

const persona: Persona = new Persona('Damian');
persona.sayMyName(); // 'Damian' // 'sayMyName se ha llamado'
