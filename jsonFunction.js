/*
 json si pronuncia come jason
 JSON.stringify converte un valore javascript in json
 JSON.parse esegue il parse per campo
*/
var string = JSON.stringify({name:"X" , born:"1980" });
console.log(string);
console.log(JSON.parse(string).born);