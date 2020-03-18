interface Interface1 {
 prop1: number; 
}

interface Interface2 {
  prop2: number;
  prop3: number;
}

interface Interface3 {
  prop2: number;
}

type InterfaceMix = Interface1 & Interface2 & Interface3; // aca se necesitan las 3 propiedades si o si porque es un &

const interfaceMix: InterfaceMix = {
  prop1: 2,
  prop2: 2,
  prop3: 3
}