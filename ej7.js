//Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre. Dado un mes y un importe, 
// calcular cuál es la cantidad que se debe cobrar al cliente.
let prompt = require ('prompt-sync')();

let mes = prompt("Introduzca el mes:");
mes = String(mes);
let importe = prompt("Introduzca el importe");
importe = Number(importe);
let OKnumbs=true;
let OKstring=true;
mes = mes.toLowerCase().trim();
if (Number(mes)){
    console.log("Dime el nombre del mes no en numero");
    OKstring=false;
}
if (Number.isNaN(importe)) {
    console.log("Error vuelva a intentarlo");    
    OKnumbs=false;
}
if (OKnumbs && OKstring) {
        
        if(mes == 'enero' || mes == 'febrero' || mes == 'marzo' || mes == 'abril' ||
        mes == 'mayo' || mes == 'junio' || mes == 'julio' || mes == 'agosto' ||
        mes == 'septiembre' || mes == 'octubre' || mes == 'noviembre' || mes == 'diciembre'){    
            if(mes=='octubre'){
            console.log(`El coste es ${importe-(importe*0.15)}€`);
            }else{  
            console.log(`El coste es ${importe}€`)
            }    

      }
}
else{
    console.log("No se ha podido calcular el coste");
}
