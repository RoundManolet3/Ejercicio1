//Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. 
// Si no es válida escribir un mensaje de error. Si es válida escribir la fecha cambiando el número del mes por su nombre. 
// Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero de 2006”. El año debe ser mayor que 0.
let prompt = require ('prompt-sync')();
let dia = prompt("Dime el dia: ");
dia = Number(dia);
let mes= prompt("Dime el mes: ");
mes = Number(mes);
let año = prompt("Dime el año: ");
año = Number(año);
let OK=true;
if(Number.isNaN(dia)){
    console.log("Me has dicho una fecha inválido")
    OK =false;
}
if(Number.isNaN(mes)){
    console.log("Me has dicho una fecha inválido")
    OK =false;
}
if(Number.isNaN(año)){
    console.log("Me has dicho una fecha inválido")
    OK =false;
}
if(OK){
    if(año>0){
        if(mes>0 || mes<13){
    switch (mes) {
        case 1:
            if (dia<32) {
                console.log(`${dia} de enero de ${año}`);
            }
            break;
        case 2:
            if (dia<29) {
                console.log(`${dia} de febrero de ${año}`);
            }
            break;
        case 3:
            if (dia<32) {
                console.log(`${dia} de marzo de ${año}`);
            }
            break;
        case 4:
            if (dia<31) {
                console.log(`${dia} de abril de ${año}`);
            }
            break;
        case 5:
            if (dia<32) {
                console.log(`${dia} de mayo de ${año}`);
            }
            break;
        case 6:
            if (dia<31) {
                console.log(`${dia} de junio de ${año}`);
            }
            break;
        case 7:
            if (dia<32) {
                console.log(`${dia} de julio de ${año}`);
            }
            break;
        case 8:
            if (dia<32) {
                console.log(`${dia} de agosto de ${año}`);
            }
            break;
        case 9:
            if (dia<31) {
                console.log(`${dia} de septiembre de ${año}`);
            }
            break;
        case 10:
            if (dia<32) {
                console.log(`${dia} de octubre de ${año}`);
            }
            break;
        case 11:
            if (dia<31) {
                console.log(`${dia} de noviembre de ${año}`);
            }
            break;
        case 12:
            if (dia<32) {
                console.log(`${dia} de diciembre de ${año}`);
            }
            break;
    
        default:
            break;
    }
}else{
console.log("No me has dicho un mes");
}
    }else{
        console.log("El año debe ser mayor que 0");
    }
}else{
    console.log("Me has dicho una fecha inválido");
}