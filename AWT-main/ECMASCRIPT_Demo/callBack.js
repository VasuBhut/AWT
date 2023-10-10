console.log("Welcome to callBack concept");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Data from Login User");
    // return { userEmail: email };
    callback({ userEmail: email });
  }, 5000);

}
const user1 = loginUser("vasubhut1234@gmail.com", 123456, (user1) => {
  console.log(user1);
});
//   const user1 = loginUser("darshaswani45@gmail.com", 123456);
//   console.log(user1);
