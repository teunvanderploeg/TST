var studenten = [];

studenten = localStorage.getItem("alleStudenten");

function Student(id, klas) {
  let studentNummer = id;
  let klasNaam = klas;
  var student = { numer: studentNummer, klas: klasNaam };
  studenten.push(student);
  console.log(studenten);
  localStorage.setItem(studenten);
}

var storage = localStorage.getItem("studenten");
console.log(storage);
