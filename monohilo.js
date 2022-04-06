console.log( 'Hola mundo');

//setInterval va a ejecutar una función cada x tiempo (forever, ie, 
//se ejecuta indefinidamente)

//setInterval(function(){
//    console.log('Sigo activo');
//}, 1000);

//el eventLoop está escuchando todo el tiempo asincronamente 
//Primero imprime el Hola mundo y luego se sigue con el setInterval

//ahora con un ciclo for dentro

let i = 0;

setInterval(function(){
    console.log(i);
    i++;

    //if (i===5) {
    //    console.log('forzamos error');
    //    var a = 3 + z;
    //}
}, 1000);

//se va a crashear la aplicación porque no hemos definido la z
//hemos forzado el error a propòsito para ver que el paradigma monohilo
//te puede llevar a problemas muy serios a nivel de crasheo

console.log('Segunda instrucciòn');

//La intención de este código fue ver como el bucle infinito, node se lo 
//lleva a asíncrono por lo cual primero imprime los console.log y luego
//el bucle como tal