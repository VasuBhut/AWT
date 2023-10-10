// TASK1: Object Destructuring with “Rest” Syntax
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};
const {
    b,
    d,
    ...restOfObj
} = obj;
console.log(b); // 2
console.log(d); // 4
console.log(restOfObj); // not defined

//TASK2: Renaming Destructuring Variables

// const a = "Variable name 'a' is taken";
// const obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// const {
//   a:userName
// } = obj1;
// console.log(a); // "Variable name 'a' is taken"
// console.log(userName); // 1


// TASK3: Nested Object and Array Destructuring

// const obj = {
//     a: [ 'a1', 'a2', 'a3' ],
//     b: [ 'b1', 'b2', 'b3' ],
//     c: [ 'c1', 'c2', 'c3' ],
//     d: [ 'd1', 'd2', 'd3' ],
//     e: [ 'e1', 'e2', 'e3' ]
//   };
//   const{
//     b: [
//       bItem1,
//       bItem2
//     ],
//     d: [
//       dItem1,
//       ...dRemainingItemsArr
//     ],
//     ...restAttributesObj
//   }=obj;
//   console.log(bItem1);
//   console.log(bItem2);
//   console.log(dItem1);
//   console.log(dRemainingItemsArr);
//   console.log(restAttributesObj);

//TASK4: destructure a null or undefined value

// const obj = {
//     a: 1,
//     b: 2,
//     c: 3
//   };
//   const {
//     b: {
//       attemptToDestructureKeyFromNull
//     },
//     anUndefinedKey: {
//       attemptToDestructureKeyFromUndefined
//     }
//   } = obj;