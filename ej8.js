//Realizar un algoritmo que dado un número entero, visualice en pantalla si es par o impar. En el caso de ser 0, 
// debe visualizar “el número no es par ni impar”
// (para que un número sea par, se debe dividir entre dos y que su resto sea 0).
let prompt = require('prompt-sync')();
let a =prompt("Introduzca un numero entero: ");
a =Number(a);
let oknumbs=true;
if(Number.isNaN(a)){
    console.log("No es un número");
    oknumbs=false;
}
if(oknumbs){
    if(a==0){
        console.log(`El número ${a} no es par ni impar`);
    }else if(a%2==0){
        console.log(`El número ${a} es par`);
    }else{
        console.log(`El número ${a} es impar`);
    }
}else{
    console.log(`No has dicho ningún número`);
}