// Switch and case
const meotodoPago = 'efectivo';

switch (meotodoPago) {
    case 'efectivo':
        console.log(`Pagaste con ${meotodoPago}`);
        break;
    case 'tarjeta':
        console.log(`Pagaste con ${meotodoPago}`);
        break;
    default:
        console.log('No seleccionaste un metodo de pago');
        break;
}


