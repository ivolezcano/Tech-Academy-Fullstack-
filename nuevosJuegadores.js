// 5.- Nuevos jugadores (50 ptos).

class Persona {

    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    getDetalles(){
        // Funcion que retorna nombre, apellido y edad de la clase persona
        return(`Nombre: ${this.nombre} Apellido: ${this.apellido} Edad:${this.edad}`)
    }
}

class Jugador extends Persona {
    constructor(nombre, apellido, edad, posicion){
        super(nombre, apellido, edad)
        this.posicion = posicion;
    }

    getDetalles(i){
        if (!isNaN(i)){
            console.log(`Jugador ${i + 1}_ ${super.getDetalles()} Posicion: ${this.posicion}`)
        } else{
            console.log(`Jugador_ ${super.getDetalles()} Posicion: ${this.posicion}`)
        }
    }
}

class Entrenador extends Persona{
    constructor(nombre, apellido, edad, experiencia, idFederacion = Math.floor(Math.random() * 90000) + 10000){
        super(nombre, apellido, edad)
        this.experiencia = experiencia
        this.idFederacion = idFederacion
    }

    getDetalles(){
        // Funcion que retorna nombre, apellido, edad, experiencia y idFederacion de la clase Entrenador
        let res = `Entrenador_ ${super.getDetalles()} Experiencia: ${this.experiencia} Id Federacion: ${this.idFederacion}`
        console.log(res)
    }
}

class Equipo {
    constructor(Entrenador, Jugador){
        this.Entrenador = Entrenador
        this.Jugador = Jugador
    }
    
    getDetalles(){
        /*Funcion que brinda información del entrenador e itera uno por uno dentro del array 
        de jugadores para que retorne la informacion de forma individual*/
        this.Entrenador.getDetalles()
        for (let i = 0; i < this.Jugador.length; i++){
            this.Jugador[i].getDetalles(i)
        }

        
    }
}

// Declaración de atributos

const jugadores = [
    new Jugador("René", "Higuita", 57, "Portero"),
    new Jugador("Valentin", "Barco", 19, "Defensor"),
    new Jugador("Federico", "Redondo", 21, "Medio"),
    new Jugador("Lionel", "Messi", 33, "Delantero")
]
// jugadores[0].getDetalles()

const entrenador = new Entrenador("Carlos", "Bilardo", 86, 30)
// entrenador.getDetalles()

const equipo = new Equipo(entrenador, jugadores)
equipo.getDetalles()


