const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
    { nombre: 'Bocinas', precio: 800 },
    { nombre: 'Laptop', precio: 1000 }
];

// Métodos exclusivos de los Arrays


// ForEach 

carrito.forEach(function(producto) {
    console.log(producto.precio);
});

carrito.forEach( producto => console.log(producto.nombre)); // Un parámetro, podemos omitir los paréntesis


// map 
carrito.map( producto => console.log(producto.nombre)); // Muestra los nombres de los productos


/*

Diferencias entre forEach y map
forEach no retorna un array nuevo ; para iterar y mostrarlo en consola
map retorna un array nuevo 

*/