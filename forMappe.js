var mappa = {};

mappa["chiave01"] = 01;
mappa["chiave02"] = 02;
mappa["chiave03"] = 03;

for (var elem in mappa)
  console.log(mappa[elem]);

console.log("--");
console.log("Prova con oggetto strutturato");

var oggetto = {chiave01:{valore:1},
               chiave02:{valore:2},
               chiave03:{valore:3}
              };
for (elem in oggetto)
  console.log(oggetto[elem]);

console.log("--");
console.log("Prova con json");

var jsonData = [{"chiave":"aaa","valore":1},
                {"chiave":"bbb","valore":2},
                {"chiave":"ccc","valore":3}
               ];
for (elem in jsonData)
  console.log(jsonData[elem]);





