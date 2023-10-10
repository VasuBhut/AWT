/*Part 1
console.log(msg); // undefined
 var msg = 'Welcome to JavaScript'; // in let and const it will give error
 */

 /*Part 2 */
let msg;
console.log(msg); // undefined
msg = 'Welcome to JavaScript';
console.log(msg); // Welcome to JavaScript

//Part 3
//Function scoped
    function fun(){
       'use strict';
        //msg1 = 'Hello';
       //alert(msg1); 
        let msg
        console.log(msg);
        msg = 'Welcome to JavaScript';
    }
    fun(); // Undefined
