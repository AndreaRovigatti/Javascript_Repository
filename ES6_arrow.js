//in ES6 le funzioni anonime possono essere scritte con l'operatore arrow =>

let stampaProp = (oggetto) => {
    //console.log(Date.now());
    for (let elem in oggetto) {
        console.log(oggetto[elem]);
    }
};

let funzMuta01 = () => {
    //console.log(Date.now());
    console.log("--");
    console.log("  Ciao, sono la funzione muta");
    //console.log(`  this fa rifermento all ambito locale, in questo caso ${stampaProp(this)}`); da capire perchè questa istruzione crea asincronia, o presunta tale...
    console.log("  this si riferisce all'ambito locale");
    if (this) {
        console.log(stampaProp(this));
    }
};
funzMuta01();

//il vantaggio ulteriore è dato dalla possibilità di utilizzare this per definire lo scope di chi richiama la funzione muta
let funzMuta02 = (oggetto) => {
    //console.log(Date.now());
    for (var elem in oggetto) {
        this[elem] = oggetto[elem];
    }
    funzMuta01();
};
funzMuta02({ "chiave01": true, "chiave02": 1, "chiave03": "ciaoZ" });