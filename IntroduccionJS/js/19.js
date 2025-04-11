// Funciones que retornan un valor
function sumar(a, b) {
    return a + b;
}

const resultado = sumar(2,3); 
console.log(resultado); 

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return 1.15 * total; 
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(200);



console.log(total);


const totalPagar = calcularImpuesto(total); 
console.log(`Total a pagar: ${totalPagar}`);