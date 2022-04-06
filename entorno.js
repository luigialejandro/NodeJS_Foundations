//let saludo = 'hola';
//console.log( saludo );

//¿qué pasa si ahora necesito un valor que no vaya dentro del software
//eg. peticiones a un API, que necesite una clave, un token,
//este tipo de cosas no puede estar dentro del código porque este no debe 
//guardar credenciales

//con variables de entorno quedaría como

let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tengo web';

console.log( 'Hola '+ nombre);
console.log( 'Mi web es '+ web);

//regresa Hola undefined

//pero si se define el nombre desde la misma consola, quedaría entonces

