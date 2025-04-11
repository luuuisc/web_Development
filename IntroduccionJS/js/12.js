// Objetos 
const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}


// Forma anterior de extraer valores
//const precioProducto = producto.precio;
//const nombreProducto = producto.nombreProducto;

//console.log(precioProducto);
//console.log(nombreProducto);



// Destructuring - Extraer valores de un objeto y crear una variable
const {precio, nombreProducto} = producto;


console.log(precio);
console.log(nombreProducto);