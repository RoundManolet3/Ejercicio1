//Algoritmo que lea un número por teclado. En caso de que ese número sea 0 o menor que 0, 
// se saldrá del programa imprimiendo antes un mensaje de error. Si es mayor que 0, se deberá 
// calcular su cuadrado y la raíz cuadrada del mismo, visualizando el número que ha tecleado el usuario y 
// su resultado («Del número X, su potencia es X y su raíz X» ).
//Para calcular la raíz cuadrada se puede usar la función interna RAIZ(X)  o con una potencia de 0,5.
let prompt = require ('prompt-sync')();
let a = prompt("Introduzca el numero:");
a=Number(a);
let OK= true;
if (Number.isNaN(a)) {
    console.log("Error de sintaxis");
    OK=false;
}
if (OK) {
    if(a>0){
    console.log(`El numero ${a} Su producto es: ${Math.pow(a,2)} Su raiz es: ${Math.pow(a,0.5)}`);
    }
    else{
        console.log("Error");
    }
}