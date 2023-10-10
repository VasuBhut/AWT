let x = 6;
console.log(x);

const Name = "Vasu";
console.log(Name);

const add = (a, b) => {
  return a + b;
};
console.log(add(2, 3));

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

const numarr = [1, 2, 3, 4, 5];

for (const num of numarr) {
  console.log(num);
}

const mapObj = new Map();
mapObj.set("Name", "Vasu");
mapObj.set("id", "21ce014");

console.log(mapObj.get("Name"));
console.log(mapObj.has("id"));

mapObj.delete("id");
console.log(mapObj);

const setObj = new Set();
setObj.add(1);
setObj.add(2);
setObj.add(3);

console.log(setObj);

setObj.delete(2);
console.log(setObj);

class Student {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
  }

  Intro() {
    console.log(
      `Hello, my name is ${this.name} , I am ${this.age} years old and my CollegeId is ${this.id}.`
    );
  }
}

const std = new Student("Vasu", 19, "21ce014");
std.Intro();

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = "This is some data from an API";
      resolve(data);
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

const mySymbol = Symbol("mySymbol");

const obj = {
  [mySymbol]: "Hello, this is a Symbol property",
};

console.log(obj[mySymbol]);

function greet(name = "name") {
  console.log(`Hello, ${name}!`);
}

greet();
greet("Bhut Vasu");

function multiply(...numbers) {
  let total = 1;
  for (const num of numbers) {
    total *= num;
  }
  return total;
}

console.log(multiply(1, 2, 3));
console.log(multiply(1, 2, 3, 4, 5));
