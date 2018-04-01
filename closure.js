/*
 Closure(chiusura) è una funzione che si chiude in una variabile
 In questo caso la variabile threeTimes viene associata alla funzione
 
 function(number){
   return number * 3;
 }
 
 e invocando threeTimes con argomento 5 verrà realizzata la funzione
 function(5){
   return 5*3;
 }
    
*/

function multiplier(factor){
 return function(number){
  return number * factor;
 };
}

var threeTimes = multiplier(3);
console.log(threeTimes);
// [Function]
console.log("threeTimes(5):" + threeTimes(5));
// 15

var twice = multiplier(2);
console.log("twice(5):" + twice(5));