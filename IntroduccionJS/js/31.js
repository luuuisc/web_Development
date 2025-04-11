
const boton = document.querySelector('#btn')

// Evento 
boton.addEventListener('click', function() {
    Notification.requestPermission()
        .then(resultado => { console.log(`El resultado es: ${resultado}`)})
})

if (Notification.permission === 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/CLX.png',
        body: 'CLX Los mejores cursos'
    })
}