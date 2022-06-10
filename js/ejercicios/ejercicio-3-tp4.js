class Rectangulos {
    constructor (alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }

    set modificarAncho(nuevoAncho) {
        this.ancho = nuevoAncho;
    }

    set modificarAlto(nuevoAlto) {
        this.alto = nuevoAlto;
    }

    mostrarPropiedades() {
        document.write(`ancho: ${this.ancho} <br>
        alto: ${this.alto} <br>`)
    }

    calculoPerimetro() {
        return 2*(this.alto + this.ancho)
    }

    calculoArea() {
        return (this.alto * this.ancho)
    }

}

let rectangulo1 = new Rectangulos(5,3);

rectangulo1.mostrarPropiedades();

rectangulo1.modificarAlto = 8;
rectangulo1.modificarAncho = 20;
rectangulo1.mostrarPropiedades();
rectangulo1.calculoPerimetro()
rectangulo1.calculoArea()
console.log(rectangulo1.calculoArea())
console.log(rectangulo1.calculoPerimetro())
