/*Lee desde entrada dos variables numéricas A y B. Con ellas se pide realizar un algoritmo que intercambie 
los valores de ambas variables y muestre cuánto valen al final las dos variables.*/

let prompt = require ('prompt-sync')();

let a = prompt ('Introduzca a:');
//typeof a ==='string'
a = Number(a)
//typeof a ==='number'
let b = prompt ('Introduzca b:');
b=Number (b);
//Patrón de intercambio de variables
let c=a;
a=b;
b=c;
console.log(`El valor de a = ${a} y b = ${b}`);