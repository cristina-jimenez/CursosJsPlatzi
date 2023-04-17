//FUNCTION SCOPE
/* Las variables declaradas dentro de la funciòn, 
solo funcionan dentro de la funciòn. */

function greeting(){
    let useNAme = "Ana";
    console.log(userName);

    if(userName === "Ana"){
        console.log(`Hello ${userName}!`)
    }
}

greeting(); //Hasta aquí todo el código funciona bien.
console.log(userName); /* Al llamar la variable fuera del bloque de funciòn,
no es posible porque fue declarada dentro de la funcion y nos aparece el error
ReferenceError: useName is not defined */
