// Arreglos o arrays
// Los arreglos son una estructura de datos que nos permite almacenar varios valores en una sola variable
// Los arreglos se declaran con corchetes []
// Los valores dentro del arreglo se separan con comas

const numeros = [10, 20, 30, 40, 50];


//console.table(numeros); // Muestra una tabla en la consola
//console.log(numeros);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril']
//console.table(meses)


// Arreglo con diferentes valores 
const arreglo = ['Enero', 10, true, "si", null, {nombre: "Luis", trabajo: "Programador"}, [1, 2, 3]];

//console.table(arreglo);

// Acceder a los valores de un arreglo
//console.log(meses[0]); // Enero
//console.log(meses[1]); // Febrero
//console.log(meses[200]); // undefined


// Conocer la extensión de un arreglo
//console.log(meses.length); // 4


// Recorrer arreglos 
//meses.forEach(function(mes) {
//    console.log(mes);
//}   ); // itera sobre cada uno de los elementos del arreglo



// Modificar un valor del arreglo
numeros [5] = 60;
numeros [6] = 70;
numeros [2] = 35; // Modificar el valor 30 por 35


numeros.push(80); // Agrega un valor al final del arreglo
numeros.push(90,100,120) 


numeros.unshift(-10,-20,-30) // Agrega un valor al inicio del arreglo 


numeros.pop(); // Elimina el último valor del arreglo
numeros.shift(); // Elimina el primer valor del arreglo


numeros.splice(2, 1); // Elimina un valor en una posición específica primer número es la posición y el segundo es la cantidad de elementos a eliminar

console.table(numeros);


// Rest Operator o Spread Operator más recomendado
const nuevoArreglo = [...meses, 'Mayo']; // Agrega un valor al final del arreglo
const nuevoArreglo2 = ['Junio', ...meses]; // Agrega un valor al inicio del arreglo
console.table(nuevoArreglo);
console.table(nuevoArreglo2);