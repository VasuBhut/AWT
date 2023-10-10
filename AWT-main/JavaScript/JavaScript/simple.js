"use strict";
var a = 10;
console.log(a);

function addition() {
  "use strict";
  var b = 20;
  console.log(b);
  b = a + b;
  console.log(b);
}
addition();
function addition1(a, b) {
  "use strict";
  return a + b + b;
}
console.log(addition1(10, 20));
