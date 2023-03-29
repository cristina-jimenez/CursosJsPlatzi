const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    //función interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }
    return child();
  }
  return parent();
}

myFunction();

//--------------------------ver la diferencia-------------------------------
function error(str) {
  console.log(`%c Error: ${str}`, "background: red; color: white;");
}

function warning(str) {
  console.log(`%c Warning: ${str}`, "background: red; color: white;");
}

function exito(str) {
  console.log(`%c Èxito: ${str}`, "background: red; color: white;");
}

///-------------------------------------------
function crearImpresoraDeMensajes(tipo, estilos) {
  return function mensajes(str) {
    console.log(`%c ${tipo}: ${str}`, estilos);
  };
}

const error = crearImpresoraDeMensajes("Error", "background: red; color: white;");
const warning = crearImpresoraDeMensajes("Warning", "background: orange; color: white;");
const exito = crearImpresoraDeMensajes("Éxito", "background: green; color: white;");
const info = crearImpresoraDeMensajes("Info", "background: blue; color: white;");

/*PARA IMPRIMIR SIMPLEMENGTE PONEMOS
error('Usuario no definido'); y aparecerá en pantalla Error: Usuario no definido  (con los colores respectivos.) */



//--------------------------- para mejorar con la memoria de la pc
const estilosPorDefecto = "color: white";
function crearImpresoraDeMensajes(tipo, estilos) {
  return function mensajes(str) {
    console.log(`%c ${tipo}: ${str}`, estilos + estilosPorDefecto);
  };
}

const error = crearImpresoraDeMensajes("Error", "background: red;");
const warning = crearImpresoraDeMensajes("Warning", "background: orange;");
const exito = crearImpresoraDeMensajes("Éxito", "background: green;");
const info = crearImpresoraDeMensajes('Info', "background: blue;");
const wan = crearImpresoraDeMensajes('Wan:', "background: red; color:black");


wan('probando');
error('linea erronea');
