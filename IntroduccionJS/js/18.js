const numero1 = 20;
const numero2 = '20';

//console.log(parseInt(numero2)); // Convertir un string a un número entero FUNCIÓN parseInt() es una función de los números
//console.log(numero1.toString()); // Convertir un número a un string  MÉTODO .toString() es un método de los números

function sumar(numero1, numero2) { // Parámetros
    console.log(numero1 + numero2);
}
sumar(10,10); // Argumentos o valores reales
sumar(3,3);


const sumar2 = function(n1, n2) {
    console.log(n1 * n2);
}
sumar2(3,3); 


// Parámetros por default
function sumar3(n1 = 0, n2 = 0) {
    console.log(n1 + n2);
}
sumar3(10,10);
sumar3(); // Si no se le pasa ningún valor a la función, se le asigna el valor por default
