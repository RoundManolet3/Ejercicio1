let prompt = require ('prompt-sync')();

let a = prompt ('Introduzca a:');
//typeof a ==='string'
let okNUms = true;
if (Number.isNaN(Number(a))) {
    console.log(`a = ${a} no es un número válido.`);
    okNUms = false;
}else{
    a = Number(a)

}
let b = prompt ('Introduzca b:');
if (Number.isNaN(Number(b))) {
    console.log(`b = ${b} no es un número válido.`);
    okNUms = false;
}else{

b=Number (b);

//Patrón de intercambio de variables
}
if (okNUms) {
    let suma = a + b;
    let resta = a - b;
    let prod= a * b;
    console.log(`suma = ${suma}, resta = ${resta}, producto = ${prod}`);
}else {
    console.log(`Numero/s no operables.`);
}