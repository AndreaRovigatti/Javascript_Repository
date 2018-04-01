/*
NB su closure:"return function..." devono essere sulla stessa linea

filter filtra un array costruendone uno nuovo, con i valori selezionati
dalla funzione di filtro richiamata.
Se la funzione di filtro viene dichiarata come funzione muta, immettere 
l'argomento che indica l'elemento oppure elemento/indice/array
*/
var funzFiltro = function (lungh) {
  return function (parola) {
           if (parola.length >= lungh)
             return parola;
         };
}
    
var arr1 = ["ciao" , "a" , "tutto" , "il" , "mondo"];

var closure = funzFiltro(3);

var filtraArray01 = 
   function (elemento , indice , array){
     return closure(elemento);
   };

var arr1Filt = arr1.filter(filtraArray01);
console.log(arr1Filt);

closure = funzFiltro(5);
arr1Filt = arr1.filter(filtraArray01);
console.log(arr1Filt);

console.log("---------------");
/*map permette di costruire un nuovo array, da uno di partenza, mantenendo
  il numero di oggetti originali ma con contenuto mappato a nuova forma a
  seconda di una funzione di mapping
  Se la funzione di mapping viene dichiarata come funzione muta, immettere 
  l'argomento che indica l'elemento oppure elemento/indice/array
*/

var arr2Start = ["    primo" , "secondo    " , "      terzo     "];
console.log(arr2Start);

var mapFunz = function (elemento , indice , array){
                  return elemento.trim();
                };

var arr2Map = arr2Start.map(mapFunz);
console.log(arr2Map);

console.log("---------------");
/*reduce ripiega un array in un unico valore,ad esempio sommando
  tutti i valori, determinando maggiore o minore etc
https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
*/
var arr3Reduce = [1475 , 25 , 14236985 , 14];
var redFunz01 = function (precedente , attuale , currInd , array){
                   //return precedente + attuale;
                   if (attuale < precedente)
                     return attuale;
                   else
                     return precedente;
                };
console.log(arr3Reduce.reduce(redFunz01));




