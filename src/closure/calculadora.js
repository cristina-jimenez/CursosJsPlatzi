/* En este desafío tendrás que crear una calculadora mediante el uso de closures.

La calculadora debe contar con los siguientes métodos:

add: recibe un número, lo suma al total y devuelve el resultado
subtract: recibe un número, lo resta al total y devuelve el resultado
multiply: recibe un número, lo multiplica al total y devuelve el resultado
divide: recibe un número, lo divide al total y devuelve el resultado
clear: reinicia el total a 0 y devuelve el resultado
getTotal: devuelve el total actual.
const calculator = createCalculator()
calculator.add(10)

*/

function createCalculator() {
    let getTotal = 0;
    return {
      add(number) {
        getTotal += number;
        return getTotal;
      },
      subtract(number) {
        getTotal -= number;
        return getTotal;
      },
      multiply(number) {
        getTotal *= number;
        return getTotal;
      },
      divide(number) {
        getTotal /= number;
        return getTotal;
      },
      clear() {
        getTotal = 0;
        return getTotal;
      },
      getTotal(){
          return getTotal;
      }
    };
  }
  
  const calculator = createCalculator();
  calculator.add(10);

  //---------forma más corta.----------------
  function createCalculator() {
    let getTotal = 0;
    return {
      add: (number) => getTotal += number,
      subtract: (number) => getTotal -= number,
      multiply: (number) => getTotal *= number,
      divide:(number) => getTotal /= number,
      clear:() => getTotal = 0,
      getTotal:()=> getTotal,
    };
  }
  
  const calculator = createCalculator();
  calculator.add(10);