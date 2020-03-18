let a = 'hola'; // type inference
a = 'Holas';
a = 2; // es tipo string no se le puede asignar un numero

let b: number = 10; // type number
b = a; // tipo numero no se le puede asignar ahora un string
b = 20;
b = 10 + 10;
const num1 = 10;
const num2 = 20;
b = num1 + num2;

function suma(num1: number, num2: number): number { // se le agrega un tipo a los parametros y tambien un tipo al retorno de la funcion
  return num1 + num2;
}

let anyValue: any = 10;
anyValue = 'Hola';

suma(1,'2') // error, argumento de tipo string no es valido

function sumaJavascriptVanilla(num1, num2) {
  return num1 + num2;
}

type dni = string; // type keyword. es un alias. Connotación semántica // se puede cambiar a futuro
let dniNumber: dni = 2123
let dniNumber2: dni = 2123

