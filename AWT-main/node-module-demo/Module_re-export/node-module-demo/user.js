class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

}

function printID(user) {
    console.log(`My user ID is:  ${user.id} `)
}

function printName(user) {
    console.log(`Username is: ${user.name} `)
}

export default User
export { printID, printName }
