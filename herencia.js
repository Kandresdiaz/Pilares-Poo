//herencia
// Clase padre
class Forma {
    constructor() {
      console.log("Soy una forma geométrica.");
    }
  }

  // Clase hija
  class Cuadrado extends Forma {
    constructor() {
      super();
      console.log("Soy un cuadrado.");
    }
  }

  const c1 = new Cuadrado();
