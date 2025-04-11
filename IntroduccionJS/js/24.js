// For Loop 

/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 1; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }

}
*/

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

/*
for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre); // Sintaxis de punto para acceder a las propiedades de un objeto
}
*/



// While Loop
// let i = 1;

/*
while ( i <= 100 ) {

    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }

    i++;
}
*/


/*
while ( i < carrito.length) {
    console.log(carrito[i].nombre);
    i++;
}
*/



// Do While Loop
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);

