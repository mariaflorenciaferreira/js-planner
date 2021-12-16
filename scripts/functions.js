
function mesFecha(){

    let numeroMes= date.getMonth();
 
    switch (numeroMes){
 
     case 0: 
         return "ENERO"
         break
     case 1: 
         return "FEBRERO"
         break
     case 2: 
         return "MARZO"
         break
     case 3:
         return "ABRIL"
         break
     case 4:
         return "MAYO"
         break
     case 5:
         return "JUNIO"
         break
     case 6: 
         return "JULIO"
         break
     case 7:
         return "AGOSTO"
         break
     case 8: 
         return "SEPTIEMBRE"
         break
     case 9: 
         return "OCTUBRE"
         break
     case 10:
         return  "NOVIEMBRE"
         break
     case 11: 
         return "DICIEMBRE"
         break
     
 
     }
    
 
}
 
 
function diaFecha(){

    let nombreDia= date.getDay();
 
    switch (nombreDia){
 
     case 0: 
         return "DOMINGO"
         break

     case 1: 
         return "LUNES"
         break
     case 2: 
         return "MARTES"
         break
     case 3:
         return "MIERCOLES"
         break
     case 4:
         return "JUEVES"
         break
     case 5:
         return "VIERNES"
         break
     case 6: 
         return "SABADO"
         break
          
 
     }
    
 
}

