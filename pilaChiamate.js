var num = 0;

console.log("Head:" + num);

function greet(who){
 console.log("  ini greet " + num);
 console.log("  Salve " + who + " " + num);
 console.log("  fin greet " + num);
}
num = 1;
greet("Luigi");
num = 0;
console.log("Arrivederci " + num);
console.log("End:" + num);