// Objetos
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

// Unir 2 objetos

const nuevoProducto = {...producto, ...medidas}; // Spread Operator


console.log(nuevoProducto);