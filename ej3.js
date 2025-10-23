let prompt = require ('prompt-sync')();
let a = prompt ('Introduzca a:');
let flagformatoOk = true;
a=Number(a);

if (Number.isNaN(a)) {
    console.log(`Error de formato a = ${a} no es un número.`);
    flagformatoOk = false;
}
let b = prompt ('Introduzca b:');
b=Number (b);

if (Number.isNaN(b)) {
    console.log(`Error de formato b = ${b} no es un número.`);
    flagformatoOk = false;

}
if (flagformatoOk) {
    //Hago los calculos o proceso
    if(a>b){
        console.log(`El mayor es decir ${a}`);
    }else if (b==a){
        console.log(`Son iguales`);
    }else{
        //b>a
        console.log(`El mayor es decir ${b}`);
    }
}else {
    console.log(`No puedo calcular formato de numeros incorrecto.`);
}