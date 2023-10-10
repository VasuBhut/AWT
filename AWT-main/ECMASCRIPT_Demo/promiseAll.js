// Example asynchronous functions that return promises

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous API call to fetch user data
        setTimeout(() => {
            if (userId === 1) {
                resolve({ id: 1, name: 'Mrugendra', age: 40 });
            } else {
                reject(new Error('User not found'));
            }
        }, 1500);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        // Simulating an asynchronous API call to fetch user posts
        setTimeout(() => {
            if (userId === 1) {
                resolve([
                    { id: 101, title: 'Post 1' },
                    { id: 102, title: 'Post 2' },
                    { id: 103, title: 'Post 3' },
                ]);
            } else {
                reject(new Error('User not found'));
            }
        }, 2000);
    });
}

// Using Promise.all() to fetch user data and posts simultaneously

const userId = 1;

// Creating an array of promises to be passed to Promise.all()
const promises = [fetchUserData(userId), fetchUserPosts(userId)];

// Using Promise.all() to execute both promises simultaneously
Promise.all(promises)
    .then(([userData, userPosts]) => {
        console.log('User Data:', userData);
        console.log('User Posts:', userPosts);
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });