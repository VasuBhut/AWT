import U, { printID as displayID, printName as displayUserName } from "./user.js"
// import User from './user.js';
// import * as utils from './user.js';

const user = new U(101, "Mrugendra")
console.log(user)
displayID(user)
displayUserName(user)

// utils.printID(user)
// utils.printName(user)

