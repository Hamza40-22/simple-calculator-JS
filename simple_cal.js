function calculate(num1, num2, operator) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Cannot divide by zero!";
        }
        return num1 / num2;
      default:
        return "Invalid operator";
    }
  }
  
  const number1 = parseFloat(prompt("Enter the first number:"));
  const number2 = parseFloat(prompt("Enter the second number:"));
  const operator = prompt("Enter the operator (+, -, *, /):");
  
  const result = calculate(number1, number2, operator);
  console.log(`Result: ${result}`);
  