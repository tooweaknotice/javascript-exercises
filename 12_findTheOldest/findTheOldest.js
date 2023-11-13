const findTheOldest = function(people) {
  const arrPeople = people;
  arrPeople.sort(ageCompare);
  console.log(arrPeople[arrPeople.length - 1].name);
  return arrPeople[arrPeople.length - 1];
};

function ageCompare(personA, personB){
  const currentYear = new Date().getFullYear();
  if (personA.yearOfDeath == undefined){
    personA.yearOfDeath = currentYear;
  }
  if (personB.yearOfDeath == undefined){
    personB.yearOfDeath = currentYear;
  }
  return ((personA.yearOfDeath - personA.yearOfBirth) - (personB.yearOfDeath - personB.yearOfBirth));
}

// Do not edit below this line
module.exports = findTheOldest;
