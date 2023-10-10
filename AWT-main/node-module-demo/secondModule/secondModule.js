const add = function (a, b) {
  return a + b;
};

const sub = function (a, b) {
  return a - b;
};

const secretKey = 123456789;

module.exports = {
    add,
    sub,
    secretKey
}

// module.exports = add;
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.secretKey = secretKey;