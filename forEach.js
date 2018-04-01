/*
forEach è una funzione degli array, accetta un unico argomento,ovvero 
la funzione da eseguire(callback) per ogni elemento dell'array.
La funzione richiamata da forEach ha 3 argomenti:
 -valore
 -indice
 -array
La funzione argomento di forEach deve fare riferimento solo al nome 
della funzione,non agli argomenti della funzione. 

In questo modo migliore l'astrazione del codice,vedi eloquent Javascript
nel capitolo "Funzioni di ordine superiore" e su mozilla developers
https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Non c'è modo di fermare o interrompere bruscamente un loop forEach() se 
non chiamando un exception. Se hai bisogno di un comportamento di questo 
tipo la soluzione ideale sarebbe utilizzare un normale loop e non un forEach().
Se stai testando gli elementi di un array per un predicato e hai bisogno di 
un valore di ritorno di tipo Booleano, puoi usare every() o some(). 
Se disponibili, i nuovi metodi find() o findIndex() possono essere 
utilizzati con interruzioni con dei predicati true.
*/
var fooArr = [4 , 5 , 6 , 10];
var forEachFunz = 
    function (valore , indice , array){
        console.log("forEachFunz:" + valore + " a posizione " + indice);  
     }; 

fooArr.forEach(forEachFunz);