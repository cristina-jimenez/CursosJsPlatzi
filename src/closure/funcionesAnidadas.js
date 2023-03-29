/*En este desafío recibirás dos números aleatorios por parámetros.

Usando las closures deberás crear una función a la cual se pueda llamar en primer lugar con un solo número 
y secuencialmente volver a llamarla para completar la suma con el siguiente número:

La solución deberá tener un input y output como la siguiente, en algunos casos puede que no se mande el 
segundo número por lo que deberás pensar en como manejar ese tipo de casos.*/

function sumWithClosure(firstNum) {
  return function (secondNum = 0) {  // al no poner el nombre de la funcion se sobreentiende la misma.
    return firstNum + secondNum;
  }
}

sumWithClosure(2)(3);

//-------------------oh, es lo mismo-------------
function sumWithClosure(firstNum = 0) {
  return function sumWithClosure(secondNum = 0) { //EL NOMBRE PUEDE SER EL MISMO U OTRO
    return firstNum + secondNum;
  }
}

sumWithClosure(2)(3);