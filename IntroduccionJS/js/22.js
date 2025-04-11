// Estructuras de control

const puntaje = 1002;

if (puntaje === 1000) { // === compara el valor y el tipo de dato
    console.log('Si es igual...');
} else {
    console.log('No es igual...');
}

// == compara solo el valor
// != diferente
// !== diferente en valor y tipo de dato

const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
    console.log('El usuario puede pagar');
} else {
    console.log('Fondos insuficientes');
}

const rol = 'EDITOR';

if (rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if (rol === 'EDITOR') {
    console.log('Eres editor, puedes editar contenido');
} else {
    console.log('Acceso limitado');
} 


