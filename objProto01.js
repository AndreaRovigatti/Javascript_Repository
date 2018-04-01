/*
un costruttore JS (new + funzione) ha come costruttore Function.prototype,
che contiene un oggetto vuoto derivato da Object.prototype. 
Le istanze del costuttore(quindi da una funzione derivata da Function.prototype) 
create da  "new Costruttore(..)" hanno il prototipo derivato da Object.prototype
*/

function CostrOgg(campo1,campo2,campo3) {
  this.campo1 = campo1;
  this.campo2 = campo2;
  this.campo3 = campo3;
};

var ogg1 = new CostrOgg("a" , 1 , function(){this.campo1 + this.campo2;});


console.log(Object.getPrototypeOf(CostrOgg));
Object.getPrototypeOf(ogg1) == Object.prototype ? console.log("  Object.prototype") : console.log("  " + Object.getPrototypeOf(ogg1));  


