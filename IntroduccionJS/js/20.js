// Métodos de propiedad 
const reproductor = {
    reproducir : function(id){
        console.log('Reproduciendo canción con el ID: ', id);
    },

    pausar : function(){
        console.log('Pausando...');
    },
    crearPlaylist : function(nombre){
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist : function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = function(id){
    console.log(`Eliminando canción con el ID: ${id}`);
}



reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrarCancion(30);
reproductor.crearPlaylist('Luivi Playlist');
reproductor.reproducirPlaylist('Luivi Playlist');

