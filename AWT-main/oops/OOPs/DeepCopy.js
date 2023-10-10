const user={
    firstName: "Mrugendra",
    lastName: "Rahevar",
    email:"mrugendra@gmail.com",
    address:{
        city:"Ahmedabad",
    }
}
const cloneObj=user;
//const cloneObj2={...user};
const cloneObj2={address:{...user.address}}
// const cloneObj=structuredClone(user); Supported from Node17+
cloneObj.email="mrugendrarahevar.ce@charusat.ac.in"
//const cloneObj2={...user,firstName:"Martin"};
cloneObj2.address.city="Vadodara"
console.log(user);
console.log(cloneObj);
console.log(cloneObj2);



// //Deep copy on Array
// const arr=[1,2,3,4,5];
// // const cloneArr=[...arr];
// const cloneArr=arr;
// cloneArr[0]=100;
// cloneArr.push(6);
// console.log(arr);
// console.log(cloneArr);

// //Structured clone Example
const user2={
    firstName: "Mrugendra",
    lastName: "Rahevar",
    email:"mrugendra@gmail.com",
    address:{
        city:"Ahmedabad",
        state:"Gujarat",
        country:"India"
    },
    display:function(){
        console.log(this.firstName+" "+this.lastName);
    }
}

//const cloneUser2=structuredClone(user2); //Supported from Node17+
const cloneUser2=JSON.parse(JSON.stringify(user2));
cloneUser2.address.city="Vadodara";
console.log(user2);
console.log(cloneUser2);
