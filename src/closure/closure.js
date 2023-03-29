
function greeting (){
    let username = 'Oscar';
    function displayUserName(){
        return `Hello ${username}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); // [Function: displayUserName], retornando la funcion la definicion
console.log(g()); // Hello Oscar; aqui nos està dando el valor de la funcion.
