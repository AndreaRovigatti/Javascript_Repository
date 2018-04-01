/* capitolo 5 Eloquent Javascript , pagina 79 , funzione noisy
*/
function noisy(f){
  console.log(f); //questo log fa' capire bene il funzionamento
  return function(arg){
    console.log("  sto chiamando con ",arg);
    var val= f(arg);
    console.log("  chiamato con ",arg," ottenuto ",val);
    return val;
  };
}
noisy(Boolean)(0);
noisy(Boolean)(1);
noisy(0);

console.log("---");

function valutaNumero(numero){
  if (!arguments.length)
     return "numero non presente!";
  if (numero < 0)
     return "valore negativo"
  else if (numero >= 0 && numero <= 99)
     return "positivo fino a 2 decimali";
  else return "positivo superiore a 3 decimali"; 
}

noisy(valutaNumero)(15);
noisy(valutaNumero);

console.log("---");

function noisyBis(f){
  console.log(f); //questo log fa' capire bene il funzionamento
  return function(){
    return f.apply(18,arguments);
  };
}

noisyBis(valutaNumero)(16);
noisyBis(valutaNumero);