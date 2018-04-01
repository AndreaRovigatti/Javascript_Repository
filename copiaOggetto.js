//gli oggetti Javascript sono mutabili e si basano sul riferimento, non sul valore
//assegnare un oggetto ad uno nuovo comporta 2 etichette(variabili) che si riferiscono allo stesso oggetto

//01)copia json attraverso spacchettamento
console.log("--copia json attraverso spacchettamento");
var jsonData = [{ "campo1": "abaco", "campo2": 1 }, { "campo1": "abaco2", "campo2": 2 }, { "campo1": "abaco3", "campo2": 3 }, { "campo1": "abaco4", "campo2": 4 }];
var jsonNew = [];
for (var elem in jsonData) {
    jsonNew.push(jsonData[elem]);
}
jsonData == jsonNew ? console.log("ancora uguali") : console.log("Stessi valori ma json diversi");
console.log(jsonData);
console.log(jsonNew);

//02)copia array attraverso spacchettamento
console.log("--copia array attraverso spacchettamento");
var arrStart = [1, 6, 7, 12, "ciao"];
var arrNew = [];
for (var elem in arrStart) {
    arrNew.push(arrStart[elem]);
}
arrStart == arrNew ? console.log("ancora uguali") : console.log("Stessi valori ma oggetti diversi");
console.log(arrStart);
console.log(arrNew);

//03)copia oggetto js generico attraverso spacchettamento
console.log("--copia oggetto js generico attraverso spacchettamento");
var oggStart = { "campo1": "abaco", "campo2": 1 };
var oggNew = {};
for (var elem in oggStart) {
    oggNew[elem] = oggStart[elem];
}
oggStart == oggNew ? console.log("ancora uguali") : console.log("Stessi valori ma oggetti diversi");
console.log(oggStart);
console.log(oggNew);