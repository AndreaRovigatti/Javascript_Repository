/*
 Le funzioni possono chiamare se stesse,fintanto che non fanno saltare
 lo stack.
 La ricorsività può appesantire l'esecuzione(10 volte più pesante dei cicli),ma 
 rende il codice più elegenate e leggibile/comprensibile.
 Se possibile...non rinunciare all'eleganza ed alla chiarezza.

 I problemi che richiedono di analizzare diversi rami,che a loro volta possono
 essere ulteriormente ramificati,si prestano ad essere risolti più 
 semplicemente con la ricorsività.
*/

function power(base , exponent){
 console.log("  chiamo con:" + base + "/" + exponent);
 if (exponent == 0)
   return 1;
 else {
   console.log("    " + base * power(base, exponent - 1)); 
   return base * power(base, exponent - 1);
   }
}

console.log(power(2,3));