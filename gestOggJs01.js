/*scenari su come gestire gli oggetti con javascript*/

/*
  livello 00:metodi comuni da applicare a uno o più oggetti
             che condividono determinate proprietà.
             this dentro i metodi si riferisce all'oggetto per il
             quale si richiama la funzione 
*/
function applicaParam01() {
    this.param01 = this.fattoreA / 12.5;
}

function applicaParam02() {
    if (!this.param01) this.param02 = -1;
    this.param02 = this.fattoreA + 1;
}

function togliParam01() {
    if (this.param01)
        delete this.param01;
}

/*
  livello applicativo:creo oggetti "al volo" e richiamo funzioni dichiarate sopra per aggiungere
                      o togliere delle proprietà.In scenari più semplici posso limitarmi a modificare
                      le proprietà  
*/

var istanza01 = {};
istanza01.fattoreA = 15;

applicaParam01.call(istanza01);
applicaParam02.call(istanza01);

console.log(istanza01.fattoreA + "/" + istanza01.param01 + "/" + istanza01.param02);

console.log("--tolgo una proprietà all oggetto");

togliParam01.call(istanza01);
console.log(istanza01.fattoreA + "/" + istanza01.param01 + "/" + istanza01.param02);