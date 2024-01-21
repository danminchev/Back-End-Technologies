function createPerson(firstName, lastName, age) {
    var person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    return person;
}

var person1 = createPerson("Peter", "Pan", "20");
console.log(person1); 
// {firstName: 'Peter', lastName: 'Pan', age: '20'}

var person2 = createPerson("George", "Smith", "18");
console.log(person2); 
// {firstName: 'George', lastName: 'Smith', age: '18'}
