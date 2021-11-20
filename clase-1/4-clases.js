// funcionalidades incorporadas en ES6
class Contador {
  static cuentaGeneral = 0; // propiedad estática, no pertenece a la instancia

  constructor(responsable) {
    this.responsable = responsable;
    this.cuentaIndividual = 0;
  }

  obtenerResponsable() {
    return this.responsable;
  }

  obtenerCuentaIndividual() {
    return this.cuentaIndividual;
  }

  obtenerCuentaGeneral() {
    return Contador.cuentaGeneral;
  }

  contar() {
    this.cuentaIndividual++;
    Contador.cuentaGeneral++;
  }
}

const resp1 = new Contador("responsable 1"); // instancia de la clase
resp1.contar(); // uso del objeto creado
resp1.contar();
resp1.contar();
console.log(`cuenta individual responsable 1: ${resp1.obtenerCuentaIndividual()}`);
console.log(`cuenta general responsable 1: ${resp1.obtenerCuentaGeneral()}`);

const resp2 = new Contador("responsable 2");
resp2.contar();
resp2.contar();
console.log(`cuenta individual responsable 2: ${resp2.obtenerCuentaIndividual()}`);
console.log(`cuenta general responsable 2: ${resp2.obtenerCuentaGeneral()}`);
