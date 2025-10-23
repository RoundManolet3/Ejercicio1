//Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual.
//  Diseñar un algoritmo para este propósito.
let prompt = require ('prompt-sync')();
let chico = prompt("Dime el numero de chicos:");
chico=Number(chico);
let chica = prompt ("Dime el numero de chicas:");
chica=Number(chica);
let OK= true;
if (Number.isNaN(chico)) {
    console.log("Error de sintaxis");
    OK=false;
}
if (Number.isNaN(chica)) {
    console.log("Error de sintaxis");
    OK=false;
}
if (OK) {
   if (chico<0) {
    console.log("No hay chicos");
   }else if (chica < 0){
    console.log("No hay chicas");
   }else{
    let total = chico +chica;
    console.log(`El porcentaje de chicos es: ${(chico/total)*100}% El porcentaje de las chicas: ${(chica/total)*100}%`);
   }
}else{
    console.log("No es un numero");
}