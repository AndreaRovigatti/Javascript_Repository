var array = [12, 13, 18, 21, 26, 35, 56],
    accum = 0;

(function iterazione(indice) {
    if (indice == array.length) {
        console.log("--acccum:" + accum);
        return accum;
    } else {
        console.log("--");
        console.log("  " + indice + "/" + array[indice] + "/" + accum);
        accum += array[indice];
        iterazione(indice + 1);
    }
})(0);

console.log(accum);