class Cuenta {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }

    ingresar(cantidad) {
        this.saldo = cantidad;
    }

    extraer(monto) {
        this.saldo = this.saldo - monto;
        return this.saldo
    }

    informar() {
        document.write(`Titular de la cuenta: ${this.titular} <br>
        Saldo actual: ${this.saldo} <br>`)
    }
}

let usuario = new Cuenta("alexis")

usuario.ingresar(200);
usuario.informar();
usuario.extraer(100);
usuario.informar();