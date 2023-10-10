console.log("Welcome to Callback concept");

function loginUser(email, password,mlr) { //callback
    setTimeout(() => {
        console.log("Data from Login user");
        //return {userEmail:email}; 
        mlr({ userEmail: email })
    }, 5000);
}
const user1 = loginUser("test@exampl.com", 123456, user1 => {
    console.log(user1);
})
// const user1=loginUser("test@exampl.com",123456)
// console.log(user1);

function getUserVideos(email, callback) { // no data found
    setTimeout(() => {
        console.log("Data from Login user");
        callback(["V1", "V2", "V3"]);
    }, 2000);
}
function getVideoDetails(video, callback) {
    setTimeout(() => {
        console.log("Data from Login user");
        callback(["Title", "Author"]);
    }, 1000);
}





const user = loginUser("test@example.com", 123456, user => {
    console.log(user);
    getUserVideos(user.userEmail, videos => {
        console.log(videos);
        getVideoDetails(videos[0], title => {
            console.log(title);
        })
    });

}); // Callback hell