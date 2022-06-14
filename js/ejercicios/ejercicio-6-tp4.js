class Libro {
    constructor (ISBN, titulo, autor, numeroPaginas) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas
    }
    
    mostrarLibro(){
        document.write(`El libro ${this.titulo} con ISBN ${this.ISBN} creado por el autor ${this.autor} tiene ${this.numeroPaginas} páginas<br>`)
    }

    set cambiarISBN(ISBN){
        this.ISBN = ISBN;
    }

    set cambiarTitulo(titulo){
        this.titulo = titulo;
    }

    set cambiarAutor(autor){
        this.autor = autor;
    }

    set cambiarNumeroDePaginas(numeroPaginas){
        this.numeroPaginas = numeroPaginas;
    }

}

let libro1 = new Libro(9898754546218, "El Anaconda", "Estaban Quito", 69);
let libro2 = new Libro(5488432541845, "Fisica 101", "Alberto Enisnteni", 108);

libro1.mostrarLibro();
libro2.mostrarLibro();