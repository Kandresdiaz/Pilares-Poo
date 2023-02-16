function Persona(nombre, edad) {

    var nombreCompleto = nombre;
    var edadPersona = edad;

    function imprimirEdad() {
      console.log("La edad de la persona es: " + edadPersona);
    }
  
    this.obtenerNombreCompleto = function() {
      return nombreCompleto;
    }
  
    this.establecerEdad = function(nuevaEdad) {
      edadPersona = nuevaEdad;
      imprimirEdad();
    }
  }

  var persona = new Persona("Juan Perez", 30);
  

  console.log(persona.obtenerNombreCompleto()); 
  persona.establecerEdad(35); 
  