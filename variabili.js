/*
Una variabile permette di salvare e mantenere un valore ad un determinato 
istante.
Più che un contenitore si può schematizzare come un "tentacolo" che afferra
un valore preciso quando serve.
La sintassi è 
  var nomeVar = espressione; 
  (espressione:frammento di codice che produce un risultato
               in questo caso imposta il valore iniziale)
Se dichiaro una variabile omettendo il valore questa variabile sarà undefined
in quanto "il tentacolo non trova nulla da afferrare"

Il valore può essere assegnato anche dopo la dichiarazione
  nomeVar = espressione;
*/
console.log("Dichiaro variabile varA con valore ciao e varB senza valore");
var varA = "ciao",varB;
console.log("varA:" + varA);
console.log("varB:" + varB);
console.log("Definisco valore varB e ristampo");
varB = "mondo";
console.log("varA:" + varA);
console.log("varB:" + varB);

 