console.log(
    (function aumentaOggetto(oggetto, chiave, valore) {
        var risultato = {};
        for (var elem in oggetto)
            risultato[elem] = oggetto[elem];
        risultato[chiave] = valore;
        return risultato;
    })({ "campo1": "ciao", "campo2": "salve" }, "campo3", 15)
);