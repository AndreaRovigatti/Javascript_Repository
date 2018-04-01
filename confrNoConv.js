var valN = 5, valS = '5' , confr = "";
confr = "valN == valS";
console.log(confr);
console.log(valN == valS);
//restituisce true, javascript converte le variabili allo stesso formato
confr = "valN === valS";
console.log(confr);
console.log(valN === valS);
//restituisce false, === non converte automaticamente i valori
//!== funziona allo stesso modo, ma per indicare diverso
confr = "valN != valS";
console.log(confr);
console.log(valN != valS);
confr = "valN !== valS";
console.log(confr);
console.log(valN !== valS);
