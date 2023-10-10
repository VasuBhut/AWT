let numArrays = ["Vasu", 19, true, 14.5];
console.log("Length of the array:", numArrays.length);
console.log("Element at index 2:", numArrays[2]);

numArrays.push({ 1: 1 });
console.log("Array after push:", numArrays);

numArrays.pop();
console.log("Array after pop:", numArrays);

numArrays.shift();
console.log("Array after shift:", numArrays);

numArrays.unshift(0);
console.log("Array after unshift:", numArrays);

console.log("Display array using join():", numArrays.join(", "));

delete numArrays[2];
console.log("Array after delete:", numArrays);

let anotherarray = [1, 2, 3];
let concatarr = numArrays.concat(anotherarray);
console.log("Concatenated array:", concatarr);

let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat(3);
console.log("Flattened array:", flatArray);

numArrays.splice(1, 2, 5, 8);
console.log("Array after splice:", numArrays);

let slicearr = numArrays.slice(1, 3);
console.log("Sliced array:", slicearr);

let Student = {
  name: "Vasu Bhut",
  age: 19,
  gender: "Male",
  id: "21ce014",
};

function displayStudentDetails(StudentObj) {
  console.log("Name:", StudentObj.name);
  console.log("Age:", StudentObj.age);
  console.log("Gender:", StudentObj.gender);
}

displayStudentDetails(Student);
