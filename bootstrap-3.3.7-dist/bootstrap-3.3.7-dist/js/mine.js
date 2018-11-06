"use strict";
/*
document.write( );
document.write(person.name);
document.write(person.age);
document.write(person.occupation);
*/

var personList = [];
var person;

function Person(name,age,occupation) {
  person = {
  "name": name,
  "age": age,
  "occupation": occupation
}
return person;
}

function create(name,age,occupation) {
  personList.push(Person(name,age,occupation));
}


function output() {
  for(var i=0;i<personList.length;i++) {
  alert("Name: "+personList[i].name);
  alert("Age: "+personList[i].age);
  alert("Occupation: "+personList[i].occupation);
}
}

/*
function edit(person,nameinput,ageinput,occupationinput) {
  personnew = {
  "name": nameinput,
  "age": ageinput,
  "occupation": occupationinput
}
personList.replace(personnew);
return personList;
}
*/


//document.write(person.age);
