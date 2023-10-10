function Factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * Factorial(num - 1);
}

const number = 5;
console.log(`Factorial of ${number} is:`, Factorial(number));

function Intro(name) {
  function IntroPrint() {
    return `Hello, ${name}! Welcome to our website.`;
  }
  const IntroMessage = IntroPrint();
  console.log(IntroMessage);
}

Intro("Vasu");
