// Clases

// Clase: es una plantilla para crear objetos, es un modelo definido por atributos y métodos
// Atributos: son las características que tiene el objeto
// Métodos: son las acciones que puede realizar el objeto

class Producto {
    // Método especial que se ejecuta al crear un nuevo objeto
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }

    obtenerPrecio() {
        console.log(this.precio);
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 300);

// Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio); // Llama al constructor de la clase padre
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su ISBN es ${this.isbn}`; // Llama al método de la clase padre
    }

    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Y si hay en existencia');
    }
}

const libro = new Libro('Java', 800, '1234567890');
console.log(libro.formatearProducto());
console.log(libro.obtenerPrecio());


console.log(producto2.formatearProducto());


