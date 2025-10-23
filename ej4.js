//Solicita por teclado tres números; si el primero es negativo, muestra el producto de los tres y si no lo es, muestra la suma.
let prompt = require ('prompt-sync')();
let a = prompt("Dame un numero:");
let b = prompt ("Dame un numero");
let c = prompt ("Dame un numero");
a = Number(a);
b = Number(b);
c = Number(c);
let okNUms = true;
if (Number.isNaN(a)) {
    console.log("Numero invalido");
    okNUms =false
}
if (Number.isNaN(b)) {
    console.log("Numero invalido");
    okNUms =false
}
if (Number.isNaN(c)) {
    console.log("Numero invalido");
    okNUms =false
}
if(okNUms){
if (a<0) {
    console.log("El producto de los 3 es:"+a*b*c );
}else{
    console.log("La suma de los 3 es:"+(a+b+c));
}
}else{
    console.log("El numero introducido es invalido")
}