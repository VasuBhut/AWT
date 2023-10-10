// Object references and copying

let user = { name: 'Mrugendra' };
let admin = user; // copy the reference

admin.name = 'Martin'; // changed by the "admin" reference
console.log(user.name);//

//Comparison by reference
let a = {};
let b = a; // copy the reference

console.log( a == b ); // true, both variables reference the same object
console.log( a === b ); // true

let c = {};
let d = {}; // two independent objects

console.log( c== d ); // false

//Const objects can be modified
const users = {
    name: "Mrugendra"
};
users.name = "Martin"; // (*)
console.log(users.name); // Martin

//Cloning and merging, Object.assign
let user1 = {
    name: "Mrugendra",
    age: 40
  };
  
  let clone = {}; // the new empty object
  
  // let's copy all user properties into it
  for (let key in user1) {
    clone[key] = user1[key];
  }
  
  // now clone is a fully independent object with the same content
  clone.name = "Martin"; // changed the data in it
  //let clone2 = Object.assign({}, user1);//use Object.assign to perform a simple object cloning:
  //Object.assign(user1, { name: "Nikunj" });

  console.log("\n \n")
  console.log( clone.name );
  console.log( user1.name ); // still Mrugendra in the original object
  //console.log( clone2.name );

  //Nested cloning

  let user3 = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  console.log( user3.sizes.height );
  let clone3 = Object.assign({}, user3); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  
  console.log( user3.sizes === clone3.sizes ); // true, same object
  
  // user and clone share sizes
  user3.sizes.width = 60;    // change a property from one place
  console.log(clone3.sizes.width); // 60, get the result from the other one