type Dni = number; 

interface Persona { // interface un tipo abstracto que representa una estructura del objeto
  altura?: number; // con el signo de interrogacion indica que el atributo es opcional
  edad: number;
  nombre: string;
  apellido: string;
  dni: Dni;
}

const persona: Persona = {
  altura: 1.68,
  edad: 27, 
  nombre: 'Damian',
  apellido: 'Vigo',
  dni: 33450123
}