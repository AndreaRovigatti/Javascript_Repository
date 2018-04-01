/*
 I problemi che richiedono di analizzare diversi rami,che a loro volta possono
 essere ulteriormente ramificati,si prestano ad essere risolti più 
 semplicemente con la ricorsività.
 Questo problema è un esempio:
 si cerca se un numero può essere scomposto in fattori per somme di 5 o 
 moltiplicazioni per 3, potendo combinare questi 2 fattori
*/
function findSolution(target){
  console.log("--Inizio per obbiettivo:" + target);
  function find(start , history , cond){  
   if (start == target)
     return history + cond;
   else if (start > target) {
     console.log("  fine percorso" + cond + " sono arrivato a " + start);
     return null;
   } else
     return find(start + 5 , "(" + history + " + 5)" , " giro+5") ||
            find(start * 3 , "(" + history + " * 3)" , " giro*3");
  }

  /*
    find(1,"1") è la prima chiamata effettuata,serve per 
    -impostare partenza  ad 1 
    -storia del percorso ad "1"
    -inannelare le chiamate ricorsive 
  */
  return find(1,"1"," primaCall");
}

console.log("003=" + findSolution(3));
console.log("006=" + findSolution(6));
console.log("024=" + findSolution(24));
console.log("013=" + findSolution(13));
console.log("016=" + findSolution(16));
console.log("100=" + findSolution(100));