// Palabra reservada This 

// This es una palabra reservada que hace referencia al objeto que está ejecutando el código en ese momento. 
// En el caso de los métodos, this hace referencia al objeto que llama al método. 
// En el caso de los eventos, this hace referencia al objeto que recibe el evento.
// En el caso de los objetos, this hace referencia al objeto que se está creando.
// En el caso de las funciones, this hace referencia al objeto global.

const reservacion = {
    nombre : 'Luis',
    apellido : 'Pérez',
    total : 5000,
    pagado : false,
    informacion : function () {
        console.log(`El cliente ${this.nombre} reservó y su total es de ${this.total}`); // This hace referencia al objeto reservacion
    }
}

const reservacion2 = {
    nombre : 'Angel',
    apellido : 'Dios',
    total : 10000,
    pagado : false,
    informacion : function () {
        console.log(`El cliente ${this.nombre} reservó y su total es de ${this.total}`); // This hace referencia al objeto reservacion
    }
}

console.log(reservacion.informacion());
console.log(reservacion2.informacion());