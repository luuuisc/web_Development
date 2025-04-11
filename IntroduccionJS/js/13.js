//"use strict"; // Use strict hace que se apliquen las buenas prácticas de programación
// Objetos 
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

Object.freeze(producto); // No se puede modificar ni agregar ni eliminar propiedades
//Object.seal(producto); // No se puede agregar ni eliminar propiedades, pero si modificar las existentes

///producto.imagen = "imagen.jpg";
delete producto.precio; // No se puede eliminar propiedades

//producto.precio = 'Nuevo precio'; // Con seal 

console.log(Object.isFrozen(producto)); // Saber si un objeto está congelado
console.log(producto);