// FUNCIONES

// Declaración de una función
function sumar() {
    console.log(10 * 10);
}

// Llamada a la función
sumar();


// Expresión de una función
const sumar2 = function() {
    console.log(3 + 3);
}

sumar2();


// IIFE (Immediately Invoked Function Expression) - Función autoinvocada 
// Sirven para proteger el código y no contaminar el scope global 
// Que no se mezclen las variables de diferentes archivos

(function() {
    console.log('Ejecutando una función');
})();

// Hoisting
// Se puede llamar a una función antes de declararla
// Por la manera en la que se ejecuta el código en JS primero se leen las funciones y luego se ejecutan ( JS se ejecuta en dos etapas )


