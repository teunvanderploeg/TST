function DemoAccessControl() {
  // private variable
  let accessObject = this;

  // public variable
  accessObject.nummer = 1;

  // public variable
  accessObject.tekst = "Hello";

  // public variable
  this.aNumber = 10;

  // private variable
  let anOtherNumber = 20;

  // priviliged method
  this.getAnOtherNumber = function () {
    return anOtherNumber;
  };

  //  priviliged method
  this.setAnOtherNumber = function (number) {
    anOtherNumber = number;
  };

  // private method
  let objectValues = function () {
    console.log(anOtherNumber, accessObject.nummer, accessObject.tekst);
  };
}
let Demo = new DemoAccessControl();
console.log(Demo.accessObject); //private
console.log(Demo.nummer);
console.log(Demo.tekst);
console.log(Demo.aNumber);
console.log(Demo.anOtherNumber); //private
console.log(Demo.getAnOtherNumber);
console.log(Demo.setAnOtherNumber);
console.log(Demo.objectValues); //private

console.time();

/*
Een variabele is private of public
Voor een method of functie bestaat een iets andere benaming
deze kunnen priviliged of private zijn.

Priviliged:
    kan de private variabelen ophalen of wijzigen
Private:
    zijn niet zichtbaar buiten class of object

 1.
 Maak een nieuwe variabele met de naam demo aan
 waarin je een nieuw object DemoAccessControl stopt

 2.
 Probeer nu alle variabelen en methods aan te roepen

 3.
 Welke variabelen zijn public of private
 Welke methods zijn zichtbaar in je variabele

 4.
 Probeer de interface te maken

*/
