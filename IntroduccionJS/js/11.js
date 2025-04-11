// Objetos 

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

// Un objeto agrupa todo en una sola variable
const producto = {
    nombreProducto: "Monitor 20 Pulgadas", // Propiedad: Valor
    precio: 300,
    disponible: true
}

console.log(producto);

// Acceder a las propiedades del objeto
console.log(producto.nombreProducto); // Notación de punto
console.log(producto.precio);
console.log(producto.disponible);

// Otra forma de acceder a las propiedades del objeto
console.log(producto['nombreProducto']); // Notación de corchetes
console.log(producto['precio']);
console.log(producto['disponible']);

// Agregar nuevas propiedades al objeto
producto.imagen = 'imagen.jpg';
console.log(producto);

// Eliminar propiedades del objeto
delete producto.disponible;
console.log(producto);
