// Orden de las operaciones

let resultado;

resultado = 20 + 30 * 2; // 80 podemos controlar con parentesis 
resultado = (20 + 30) * 2; // 100
resultado = (100 + 200 + 300) * .2; // 120 20% de descuento como si fuera una compra
resultado = (100 + 200 + 300) * 1.16; // 696 16% de impuesto como si fuera una compra
resultado = (400 + 400) * 1.05; // 840 5% de impuesto o comision como si fuera una compra



// console.log(resultado);


// Incrementos

let puntaje = 10;

// Incremento en 1 ++
puntaje++; //11
++puntaje; //12

// Decremento en 1 --
puntaje--; //11
--puntaje; //10


puntaje += 10; //20

console.log(puntaje);

//console.log(puntaje++); // guarda el valor y luego incrementa
//console.log(++puntaje); // incrementa y luego guarda el valor
