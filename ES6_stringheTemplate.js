//in ES6 sono state introdotte le backtick per gestire le stringhe:
// posso inserire delle espressioni 
//   ${espressioni}
// dentro le stringhe
//In linux le backtick si scrivono con Alt Gr + ' = `
let a = 1,
    b = 2;
console.log(`${a}*${b}=${a*b}`);
console.log(`Ciao a tutti ${a}`);
console.log(`esito:${a < b ? "vince b" : a > b ? "vince a" : "uguali" }`);