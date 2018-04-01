/*
 break permette di uscire da un ciclo
*/
console.log("Ciclo for da 0 a 100,esco al primo numero pari > 21");
var i = 0;
for(i=0;i < 100;i++){
 if ( (i % 2 == 0) && (i > 21) )
   break;
}
console.log(i);