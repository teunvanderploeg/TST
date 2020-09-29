function Voorraad(item, aantal, verlaagVoorraadd = 0, verhoogVoorraadd = 0) {
  let artikel = item;
  let voorraad = aantal;
  let verlaagVoorraad = verlaagVoorraadd;
  let verhoogVoorraad = verhoogVoorraadd;
  this.getVoorraad = function () {
    return voorraad;
  };
  this.getArtikel = function () {
    return artikel;
  };
  this.showVoorrad = function () {
    console.log("De voorraad van : " + artikel + " is " + voorraad);
  };
  this.verlaagVoorraad = function () {
    voorraad = voorraad - verlaagVoorraad;
  };
  this.verhoogVoorraad = function () {
    voorraad = voorraad + verhoogVoorraad;
  };
}
function Auto(merk, bouwjaar) {
  let brand = merk;
  let year = bouwjaar;

  this.getBrand = function () {
    return brand;
  };

  this.getYear = function () {
    return year;
  };

  this.showDetails = function () {
    console.log("Automerk: " + brand + " bouwjaar: " + bouwjaar);
  };
}
