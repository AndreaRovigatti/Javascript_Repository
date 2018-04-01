/*
 un prototipo è una sorgente di proprietà di un oggetto
 Quando si ricerca una proprietà in un oggetto,e non si trova,questa
 viene cercata nel prototipo e se non trovata nel prototipo del prototipo etc

 Vi sono prototipi ancestrali,di base, per tutte le strutture dati:
 Object.prototype   oggetti
 Function.prototype funzioni
 Array.prototype    array
*/

var protoOgg = {campo1:"" , campo2:0 , met01:function(){console.log(this.campo2)}};

if (Object.getPrototypeOf(protoOgg) == Object.prototype)
  console.log("Inizio struttura albero ,prototipo uguale a Object.prototype");
//Il prototipo di protoOgg è Object.prototype, l'inizio della struttura ad albero

var istanza = Object.create(protoOgg);
//creo un oggetto dal prototipio protoOgg

console.log(Object.getPrototypeOf(istanza));
//Il prototipo di istanza è protoOgg, che è figlio di Object.prototype
//nella struttura ad albero dei prototipi


