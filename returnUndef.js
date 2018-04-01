/*
 undefined viene interpretato come false
*/

function funzione(argomento){
 if (argomento.length > 3)
   return "ok";
 else
   return;
}

var cmdS = "aaa";
console.log(funzione(cmdS));
if (funzione(cmdS))
  console.log ("True :" + cmdS); 
else
  console.log ("False:" + cmdS); 

cmdS = "ciao";
console.log(funzione(cmdS));
if (funzione(cmdS))
  console.log ("True :" + cmdS); 
else
  console.log ("False:" + cmdS); 
