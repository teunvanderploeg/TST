// console.log("Wat is je naam?");
// var name = raw_input();

// console.log("Wat is je klas?");
// var klas = raw_input();

// var persoon = {
//   naam: name,
//   klas: klas,
// };

// console.log(persoon);

var name = window.prompt("Enter your name: ");
var klas = window.prompt("Enter your klas: ");
var persoon = {
  naam: name,
  klas: klas,
};
console.log(persoon);
alert(
  "Your name is " + name + " Je klas is" + klas + " Het staat ook in de console"
);
console.log(persoon);
