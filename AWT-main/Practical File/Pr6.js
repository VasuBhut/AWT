Array.prototype.customMethod = function () {
  let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.customMethod());
