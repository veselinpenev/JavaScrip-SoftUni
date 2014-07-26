function findYoungestPerson(person) {
    var minAge = Number.MAX_VALUE;
    var position;
    for (var i in person) {
        if (minAge > person[i].age) {
            minAge = person[i].age;
            position = i;
        }
    }
    console.log("The youngest person is " + person[position].firstname + " "+person[position].lastname);
}

var persons = [
  { firstname : 'George', lastname: 'Kolev', age: 32 }, 
  { firstname : 'Bay', lastname: 'Ivan', age: 81 },
  { firstname : 'Baba', lastname: 'Ginka', age: 40 }]
findYoungestPerson(persons);

