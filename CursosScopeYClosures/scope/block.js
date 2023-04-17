//BLOCK SCOPE

function fruits() {
  if (true) {
    var fruit1 = "Apple"; // function scope
    let fruit2 = "Kiwi"; //block scope
    const fruit3 = "Banana"; //block scope
  }
  console.log(fruit1);
  console.log(fruit2); /* aparece ReferenceError: fruit2 is not defined, y 
  recordar, que al primer error, se paraliza el codigo, es decir ni siquiera 
  lo intenta con fruit3, incluso si se la declara con var , quedando
  var fruit3, no llega, no sigue corriendo, porque al primer error se detiene. */
  console.log(fruit3);
}

fruits();
