class mascota {
    constructor (nombre, edad, raza, sonido) {
      this.nombre = nombre
      this.edad = edad
      this.raza = raza
      this.sonido = sonido
    }
  
    sonido_Animal () {
      console.log('funcion sonora')
    }
  }
  
  class perro extends mascota {
    sonido_Animal () {
      console.log('gruñido de perro : ' + this.sonido)
    }
  }
  
  class gato extends mascota {
    sonido_Animal () {
      console.log('sonido de gato :' + this.sonido)
    }
  }
  

  const cat = new gato('perla', 'chanda', 3, 'miau miua')
  const dog = new perro('johan', 'fastidio', 20, 'como es')
  const pet = new mascota()
  
  pet.sonido_Animal()

  cat.sonido_Animal()
  dog.sonido_Animal()