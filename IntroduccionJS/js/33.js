// Fetch API

async function obtenerEmpleados () {
    
    const archivo = 'empleados.json';
    
    /*
    fetch(archivo) // fetch es una función que nos permite hacer peticiones http
        .then ( resultado => resultado.json() ) 
        then ( datos => {
            console.log(datos.empleados);
            const { empleados } = datos;
            console.log(empleados);

            empleados.forEach( empleado => {
                console.log(empleado.nombre);
                console.log(empleado.puesto);
                console.log(empleado.edad);

            });
        });

    */
   const resultado = await fetch(archivo);
   const datos = await resultado.json();
   console.log(datos);
}

obtenerEmpleados();