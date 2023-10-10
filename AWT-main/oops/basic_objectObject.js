let person = {
  firstName: "Darsh",
  lastName: "Aswani",
  age: 19,
  hobbies: ["movies", "reading", "gaming"],
  greet: function () {
    console.log(
      `Hello everyone, I am ${this.firstName} ${this.lastName}.\nI am ${this.age} years old.`);
  },
};

console.log(person.firstName);//accessing object properties
console.log(person['lastName']);//accessing object properties
person.age = 20;//Modifying object properties
person['hobbies'].push('coding');
console.log(person.greet(), person);