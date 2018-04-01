function oggetto(){

  this.idObj  = 0;
  this.mesObj = ""; 

  this.stampaOggetto = function (){
    console.log("Id oggetto:" + this.idObj + " messaggio:" + this.mesObj);
  };
}

var og1 = new oggetto();
og1.idObj  = 1;
og1.mesObj = "messaggio di provaxx";
og1.stampaOggetto();


