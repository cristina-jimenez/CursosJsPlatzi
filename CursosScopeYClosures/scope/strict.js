//STRICT

pi = 3.1416; /* Js, lo entiende como si estuviera declaro por var, example 
var pi = 3.1416 */
console.log(pi);



/*--------------PERO AL USAR: USE STRICT -----------------
En cambio, al usar 'use strict', me va a salir error */
'use strict'
pi = 3.1416;
console.log(pi);

//------------- TAN BIEN ES APLICABLE A UNA FUNCIÒN ---------
function myFunction(){
    'use strict'
    return pi = 3.1416;  //vamos a tener el mismo error por no declarar la variable.
}
console.log(myFunction()); 


/* Use stric, hace que el còdigo sea màs ràpido*/