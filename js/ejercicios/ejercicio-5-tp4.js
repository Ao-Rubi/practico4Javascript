class Persona {
    constructor(nombre, edad, sexo, peso, altura, nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }

    mostrarGeneracion() {
        if (this.edad <= 28) {
            document.write(`Tu generacion es: Generacion Z <br>
            Su caracteristica es: Irreverencia`)
        } else if (this.edad > 28 && this.edad <= 41) {
            document.write(`Tu generacion es: Generacion Y (Millennials) <br>
            Su caracteristica es: Frustracion`)
        } else if (this.edad > 41 && this.edad <= 53) {
            document.write(`Tu generacion es: Generacion X <br>
            Su caracteristica es: Obseción por el éxito`)
        } else if (this.edad > 53 && this.edad <= 73) {
            document.write(`Tu generacion es: Baby Boom <br>
            Su caracteristica es: Ambición`)
        } else if (this.edad > 73 && this.edad <= 92) {
            document.write(`Tu generacion es: Silent generation (Niños de la pos-gerra) <br>
            Su caracteristica es: Austeridad`)
        }
    }

    esMayoDeEdad(){
        if (this.edad >= 18) {
            document.write(`<br>Eres mayor de edad.`)
        } else {
            document.write(`<br>Eres menor de edad.`)
        }
    }

    mostrarDatos(){
        document.write(`
        Datos de la persona:<br>
        Nombre: ${this.nombre}.<br>
        Edad: ${this.edad}.<br>
        Sexo: ${this.sexo}.<br>
        Peso: ${this.peso}.<br>
        Altura: ${this.altura}.<br>
        Nacimiento: ${this.nacimiento}.<br>
        `)
    }

    generarDNI(){
        let dni = Math.floor(Math.random() * (100000000 - 10000000) + 10000000);
        return document.write(`<br>DNI: ${dni}`)
    }
}

let ass = new Persona("altor", 44, "hombre", "55kg", 165, 1990);
ass.mostrarDatos();
ass.mostrarGeneracion();
ass.generarDNI()
