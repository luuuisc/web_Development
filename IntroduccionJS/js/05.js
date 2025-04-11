//METODOS DE LOS STRINGS
// String o cadenas de texto 
const tweet = "Samsung que compre hace poco en Amazon la verdad es que no me gusto nada Monitor de 20 pulgadas"
const producto2 = "Monitor de HD pulgadas"

// sintaxis más comun
console.log(tweet.length) // length me dice cuantos caracteres tiene la cadena
console.log(producto2)

// indexOf
console.log(tweet.indexOf('pulgadas')) // me dice en que posición se encuentra la palabra pulgadas
console.log(tweet.indexOf('tablet')) // si no encuentra la palabra me devuelve -1

// includes retorna true o false
console.log(tweet.includes('pulgadas')) // me dice si la palabra se encuentra en la cadena
console.log(tweet.includes('tablet')) // si no encuentra la palabra me devuelve false