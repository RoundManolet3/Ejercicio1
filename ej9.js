//Realizar algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo de grado superior o no.
//Para acceder a un grado superior, si se tiene un título de bachiller, en caso de no tenerlo, se puede acceder 
//si hemos superado una prueba de acceso.
let prompt = require ('prompt-sync')();
let bachiller = prompt("¿Tienes título de bachiller? Si/no : ");
bachiller = bachiller.toLowerCase().trim();
if(Number(bachiller)){
    console.log("¿Tienes título de bachiller?");
}else{
    if(bachiller == "si"){
        console.log(`Puedes acceder al ciclo`);
    }else{
        console.log("No tienes titulo de bachiller");
        let PA=prompt ("¿Has aprobado el prueba de acceso? Si/no : ");
        PA=PA.toLowerCase().trim();
        if (PA =="si") {
            console.log("Puedes acceder al ciclo");
        }else{
            console.log("No puedes acceder al ciclo");
        }
    }
}