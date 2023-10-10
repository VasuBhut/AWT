const add=function(a,b){
    return (a+b)
}

const sub=function(a,b){
    return (a-b)
}
const secretKey=123456789

// module.exports=add
// module.exports=sub
// module.exports.add=add
// module.exports.sub=sub
//  module.exports.secretKey=secretKey
module.exports={
    add,
    sub,
    secretKey
}

