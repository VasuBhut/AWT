//Export Module
function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

export {
    square as s,
    cube as c
}