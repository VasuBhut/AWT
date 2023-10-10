// Creating an object
let person = {
  firstName: "Mrugendra",
  lastName: "Rahevar",
  age: 41,
  hobbies: ["reading", "gaming", "Tracking"],
  greet: function () {
    console.log(`Hello, my name is ${this.firstName} 
        ${this.lastName}. 
        I'm ${this.age} years old.`);
  },
};

// Accessing object properties
console.log(person.firstName); // Output: Mrugendra
console.log(person["lastName"]); // Output: Rahevar

// Modifying object properties
person.age = 40;
person["hobbies"].push("coding");
console.log(person);

// Calling object method
person.greet(); // Output: Hello, my name is John Doe. I'm 32 years old.

/*  TASK 1

Write the code, one line for each action:

Create an empty object user.
Add the property name with the value <Your Name>.
Add the property surname with the value <Your surname >.
Change the value of the name to <Frind Name>.
Remove the property name from the object.
*/
//Soultion of TASK 1
function task1() {
  let user = {};
  user.name = "Mrugendra";
  user.surname = "Rahevar";
  user.name = "Friend Name";
  console.log("\n \n");
  console.log(user);
  delete user.name;
  console.log("After Delete the user.name");
  console.log(user);
}
task1();

/* TASK 2
We have an object storing salaries of our team:

let salaries = {
    Nirav: 100,
    Chintan: 160,
    Nikunj: 130
}
Write the code to sum all salaries and store in the variable sum. 
If salaries is empty, then the result must be 0.
*/

//Solution of TASK 2
add = () => {
  let salaries = {
    Nirav: 100,
    Chintan: 160,
    Nikunj: 130,
  };

  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
};
console.log(add());

/* TASK 3

Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.
*/

//Solution of TASK 3
function multiplyNumeric(obj) {
  //{menu}
  for (let key in obj) {
    //key=[200,300,My menu]
    if (typeof obj[key] == "number") {
      obj[key] *= 2; //obj[key]=obj[key]*2
    }
  }
}
