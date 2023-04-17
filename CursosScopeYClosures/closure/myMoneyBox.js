/* este està bien pero  no es una buena practica cambiar variables globales.
let saveCoins = 0;
function moneybox(coins){
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
}
moneybox(5);
moneybox(5);*/
//---------------------------------------
// saveCoins se reinicializa en 0
/*function moneybox(coins){
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}`);
}
moneybox(5);
moneybox(5);*/
//-----------------------------------

function moneybox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneybox();

myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(10);
/* Esto es lo bueno de las closures, que si quiero puedo crear otra variable para aplicar
la misma función y esta lo hace empezando de nuevo. */
const moneyBoxAna = moneybox(); 
moneyBoxAna(5);
moneyBoxAna(8);

/* RTA TOTAL:
MoneyBox: $5
MoneyBox: $10
MoneyBox: $20 --> HASTA aquì es de Oscar, para ANa se inicializa en 0 y suma 5 +8
MoneyBox: $5
MoneyBox: $13 */