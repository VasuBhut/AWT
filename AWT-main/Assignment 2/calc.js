function calculate(task) {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var as = document.getElementById("s1");
  var bs = document.getElementById("s2");
  var result = document.getElementById("ans");

  as.innerHTML = "";
  bs.innerHTML = "";
  result.innerHTML = "";

  if (isNaN(a)) {
    as.style.color = "red";
    as.innerHTML = " *Please enter a valid number for Number 1";
  }

  if (isNaN(b)) {
    bs.style.color = "red";
    bs.innerHTML = " *Please enter a valid number for Number 2";
  }

  if (!isNaN(a) && !isNaN(b)) {
    if (task === "mul") {
      result.innerHTML = a * b;
    } else if (task === "add") {
      result.innerHTML = a + b;
    } else if (task === "sub") {
      result.innerHTML = a - b;
    } else if (task === "div") {
      if (b === 0) {
        result.style.color = "red";
        result.innerHTML = "Cannot divide by zero";
      } else {
        result.innerHTML = a / b;
      }
    } else if (task === "mod") {
      result.innerHTML = a % b;
    }
  }
}
