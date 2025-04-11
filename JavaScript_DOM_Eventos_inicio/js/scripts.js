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



// Generar un nuevo enlace con 
const nuevoEnlace = document.createElement('A');

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