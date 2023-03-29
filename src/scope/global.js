
//GLOBAL
var a; //declarando
var b = "B"; //declarando y asignando -> inicializando
b = "bb"; // reasignacion
var a = "aa"; //redeclaraciòn

//Global Scope - GLOBAL SCOPE - GLOBAL SCOPE

var fruit = "Apple"; // global, pues han sido declaradas fuera dela funcion

function bestFruit() {
  console.log(fruit);
}
bestFruit();
//--otra forma de declararlo global

function countries() {
  country = "Colombia";
  console.log(country);
}
countries();
console.log(country); // puedo acceder porq al no declararla y solo asignar se es GLOBAL


