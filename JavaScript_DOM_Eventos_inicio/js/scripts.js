console.log("Funciona correctamente");
// querySelector
const heading = document.querySelector('.header__texto h2') // Retorna 0 o 1 elemento
heading.textContent = "Nuevo Heading";
heading.classList.add('nueva-clase');
console.log(heading);


// querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a'); // Poner el punto para seleccionar la clase
console.log(enlaces[0]);

enlaces[0].textContent = "Nuevo Texto para Enlace"; // Cambia el texto
enlaces[0].href = 'https://google.com'; // Cambia el enlace
enlaces[0].classList.add('nueva-clase'); // Agrega una clase
// enlaces[0].classList.remove('navegacion__enlace'); // Elimina una clase


// getElementById
const heading2 = document.getElementById('heading');
console.log(heading2);


// Generar un nuevo enlace con JS
const nuevoEnlace = document.createElement('A'); // Etiqueta en mayusculas

// Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); // Agrega al final



console.log(nuevoEnlace);



// Eventos 
console.log(1);

window.addEventListener('load', function() { // Callback, load espera a que el JS y los archivos que dependen del HTML estén listos
    console.log(2);
});

// Otra forma de hacerlo
window.onload = function() {
    console.log(3);
}

// Usualmente se usa el DOMContentLoaded para no esperar a que carguen las imagenes 
document.addEventListener('DOMContentLoaded', function() { // Solo espera a que el HTML esté listo, no espera a CSS o imagenes
    console.log(4);
})

console.log(5);

window.onscroll = function() {
    console.log('scrolling...');
}

// Seleccionar un elemento y asociar un evento
const btnEnviar = document.querySelector('.boton--primario');

/*
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento); // Muestra el evento
    console.log(evento.target); // Muestra el elemento que disparó el evento
    console.log(evento.target.tagName); // Muestra la etiqueta del elemento que disparó el evento
    evento.preventDefault(); // Evita que el formulario se envíe
    console.log('Enviando formulario...');
});
*/





// Eventos de los inputs y textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''

}

const nombreInput = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


/*

nombreInput.addEventListener('input', function(e) { // Se dispara cuando se cambia el valor del input
    // console.log('escribiendo '); 
    console.log(e.target.value); // Muestra el valor del input 
});

email.addEventListener('input', function(e) { // Se dispara cuando se cambia el valor del input
    // console.log('escribiendo '); 
    console.log(e.target.value); // Muestra el valor del input 
});  


mensaje.addEventListener('input', function(e) { // Se dispara cuando se cambia el valor del input
    // console.log('escribiendo '); 
    console.log(e.target.value); // Muestra el valor del input 
});
*/

// Otra forma de hacerlo
nombreInput.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);

// Evento submit
formulario.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe

    // Validar formulario
    const {nombre, email, mensaje} = datos; // Desestructura el objeto datos
    if(nombre === '' || email === '' || mensaje === '') { // Si alguno de los campos está vacío
        mostrarAlerta('Todos los campos son obligatorios', true); // Muestra el mensaje de error
        console.log('Todos los campos son obligatorios'); 
        return; 

    }
   
    // Alerta de éxito
    mostrarAlerta('Mensaje enviado correctamente'); 
    console.log('Formulario enviado correctamente'); 
    

    // Enviar formulario
    console.log('eeenviando formulario...'); // Muestra el mensaje
    
});


function leerTexto(e) {
    //console.log(e.target.value); // Muestra el valor del input 

    datos[e.target.id] = e.target.value; // Agrega el valor al objeto datos

    // console.log(datos); // Muestra el objeto datos
}


function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P'); 
    alerta.textContent = mensaje;

    if(error) {
        alerta.classList.add('error'); 
    }
    else {
        alerta.classList.add('exito'); 
    }

    formulario.appendChild(alerta);
    // Eliminar la alerta después de 5 segundos
    setTimeout(() => {
        alerta.remove(); 
    }, 5000);
}


/*
// Muestra un mensaje de error
function mostrarError(mensaje) {
    const error = document.createElement('P'); 
    error.textContent = mensaje; 
    error.classList.add('error'); 

    formulario.appendChild(error); 

    // Eliminar el error después de 5 segundos
    setTimeout(() => {
        error.remove(); 
    }, 5000); 
}

// Muestra un mensaje de éxito
function mostrarExito(mensaje) {
    const exito = document.createElement('P'); 
    exito.textContent = mensaje; 
    exito.classList.add('exito'); 

    formulario.appendChild(exito); 

    // Eliminar mensaje de éxito después de 5 segundos
    setTimeout(() => {
        exito.remove(); 
    }, 5000);
}
*/

