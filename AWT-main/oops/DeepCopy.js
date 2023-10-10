const user = {
  firstName: "Darsh",
  lastName: "Aswani",
  email: "darshaswani45@gmail.com",
  address: {
    city: "Keshod",
  },
};
const cloneObj = user; //Shallow copy
// const cloneObj2 = { ...user };//DeepCopy//Spreadoff of a original object
// const cloneObj2 = { address: { ...user.address } };
cloneObj.email = "21ce006@charusat.edu.in";
const cloneObj2 = { ...user, firstName: "Krish" };
// cloneObj2.address.city='Rajkot'
// console.log(user);
// console.log(cloneObj);
// console.log(cloneObj2);

const user2 = {
  firstName: "Krish",
  lastName: "Bhikhadiya",
  email: "21ce012@charusat.edu.in",
  address: {
    city: "Surat",
    state: "Gujarat",
    country: "India",
  },
  display: function () {
    console.log(
      this.firstName +
        " " +
        this.lastName +
        "from " +
        this.address.city +
        " " +
        this.address.state +
        " " +
        this.address.country
    );
  },
};

// const cloneUser2 = structuredClone(user2);//supported after v 17
const cloneUser2 = JSON.parse(JSON.stringify(user2));
cloneUser2.address.city = "Keshod";
console.log(user2);
console.log(cloneUser2);
