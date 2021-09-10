"javascript"[2]; //esto va a devolver "V";

"javascript".length; //esto va a devolver 10
"javascript".indexOf("script"); //devuelve solo la parte de script

//CREAR STRING
const string = "esto es un string";
// o
const string2 =  new String ("Este es otro string");

//COMO ENVIAR PARAMETRO POR SEPARADO EN UN STRING
var date = new Date;
date = date.toString();
date = date.split(" ")
date[5];
console.log(date);