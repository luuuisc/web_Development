// Array methods
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Television', precio: 100 },
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


// Con un forEach
meses.forEach(function(mes){
    if (mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

// Includes
const resultado = meses.includes('Diciembre');
console.log(resultado); // false


// Some ideal para arreglos de objetos
const existe = carrito.some(function(producto){
    return producto.nombre === 'Celular Pro';
});

console.log(existe); // false


// Arrow function
const existe2 = carrito.some(producto => producto.nombre === 'Celular');
console.log(existe2); // true


// Total a pagar en el carrito
const resultado2 = carrito.reduce(function(total, producto){ // total es el acumulador
    return total + producto.precio;
}, 0); // 0 es el valor inicial

// Con arrow function
//const resultado2 = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(resultado2); 


// Filter 
const resultado3 = carrito.filter(function(producto){
    return producto.precio > 400;
});

// Filtrar los que no son Celular
const resultado4 = carrito.filter(function(producto){
    return producto.nombre !== 'Celular';
});

console.log(resultado3);
console.log(resultado4);