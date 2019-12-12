type SumaParameter = string | number;
type sumaReturnType = string | number; // creando un alias con 2 tipos diferentes

function suma(num1: SumaParameter, num2: SumaParameter): sumaReturnType {
  // return Number(num1) + Number(num2);
  return String(num1) + num2;
}

interface Interface1 {
  prop1: number;
}

interface Interface2 {
  prop2: number;
}

type InterfaceMix = Interface1 | Interface2;

const InterfaceMix: InterfaceMix = {
  prop1: 2,
  prop2: 2 
}