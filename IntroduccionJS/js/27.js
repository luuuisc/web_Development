// POO
// Prototypes

// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

// Object Constructor
function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}

const product = new Producto('Monitor', 1000, true);
const product2 = new Producto('Smartphone', 1500, true);
const product3 = new Producto('Teclado', 200, false);


console.log(product);
console.log(product2.formatearProducto());
console.log(product3.formatearProducto());

console.log(formatearProducto(product));

// Prototypes
// Nos permite crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
}

