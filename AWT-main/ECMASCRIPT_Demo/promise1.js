console.log("Welcome to Promise Start:");

function loginUser(email,password){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("Data from LoginUser")
            resolve( {userEmail:email});
        },3000);
    });
}

function getUserVideos(email){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve (["V1","V2","V3"]);
        },1000);
    });
}

function getVideoDetails(video){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve (["Name","Singer","title Track"]);
        },1000);
    });
}

// loginUser("test@example.com",123456)
// .then(user=>getUserVideos(user.email))
// .then(videos=>getVideoDetails(videos[0]))
// .then(detail=>console.log(detail));

// // // async-await

async function display(){
    try{
    const loggeduser=await loginUser("mrugendra@example.com",123456);
    const videos= await getUserVideos(loggeduser.userEmail);
    const detail= await getVideoDetails(videos[0]);
    console.log(detail);
    }catch(err){
        console.log("Error in data retrieval");
    }
}

display();


// const yt = new Promise(resolve=>{
//     setTimeout(()=>{
//         console.log("Welcome to YT:");
//         resolve({videos:[1,2,3,4,5]});
//     },2000);
// });

// const fb = new Promise(resolve=>{
//     setTimeout(()=>{
//         console.log("Welcome to FB:");
//         resolve({user:"Mrugendra"});
//     },4000);
// });

// Promise.all([yt,fb])
// .then(result=>console.log(result));