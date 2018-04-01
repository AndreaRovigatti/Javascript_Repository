function Proto01() {};

Proto01.prototype.attr01 = "";
Proto01.prototype.met01 =
    function() {
        return this.attr01 + this.attr01;
    }

var ogg = new Proto01();
ogg.attr01 = "pippo";
console.log(ogg.met01());

var risultato = false;
(function scorriPrototype(obj) {
    if (!Object.getPrototypeOf(obj)) {
        return;
    }
    console.log(Object.getPrototypeOf(obj));
    if (Object.getPrototypeOf(obj) == Object.prototype) {
        risultato = true;
    }
    scorriPrototype(Object.getPrototypeOf(obj));
})(ogg);
console.log(risultato);

risultato = false;
(function scorriPrototype(obj) {
    if (!Object.getPrototypeOf(obj)) {
        return;
    }
    console.log(Object.getPrototypeOf(obj));
    if (Object.getPrototypeOf(obj) == Object.prototype) {
        risultato = true;
    }
    scorriPrototype(Object.getPrototypeOf(obj));
})("ciao");
console.log(risultato);