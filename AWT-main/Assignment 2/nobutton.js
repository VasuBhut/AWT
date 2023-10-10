function calculate() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var as = document.getElementById("s1");
  var bs = document.getElementById("s2");

  as.innerHTML = "";
  bs.innerHTML = "";

  if (isNaN(a)) {
    as.style.color = "red";
    as.innerHTML = " *Please enter a valid number for Number 1";
  }

  if (isNaN(b)) {
    bs.style.color = "red";
    bs.innerHTML = " *Please enter a valid number for Number 2";
  }

  if (!isNaN(a) && !isNaN(b)) {
    document.getElementById("add").innerHTML = `ADD: ${a + b}`;
    document.getElementById("sub").innerHTML = `SUB: ${a - b}`;
    document.getElementById("mul").innerHTML = `MUL: ${a * b}`;
    if (b === 0) {
      document.getElementById("div").style.color = "red";
      document.getElementById("div").innerHTML = "DIV: Cannot divide by zero";
    } else {
      document.getElementById("div").innerHTML = `DIV: ${a / b}`;
    }
    document.getElementById("mod").innerHTML = `MOD: ${a % b}`;
  }
}
