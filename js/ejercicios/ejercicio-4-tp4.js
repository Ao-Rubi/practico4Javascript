class Productos {
    constructor(codigo, nombre, precio) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    imprimeDatos() {
        document.write(`
        Nombre del producto: ${this.nombre} <br>
        Precio: ${this.precio} <br>
        Codigo de identificacion: ${this.codigo} <hr>
        `)
    }
}
let productosArray = []

// Se crea el objeto y se hace un push dentro del array.
productosArray.push(new Productos(992401, "laptop", 80000));
productosArray.push(new Productos(410925, "Teclado", 6000));
productosArray.push(new Productos(555152, "Mouse", 2500));

// forEach recorre el array elemento por elemento. se asigna un elemento del array a "producto" y luego ejecuta imprimeDatos con ese elemento.
productosArray.forEach((producto)=> {
    producto.imprimeDatos();
});

