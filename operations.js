// Add two numbers
const add = (a, b) => {
  return a + b;
};

// Subtract two numbers
const subtract = (a, b) => {
  return a - b;
};

// Multiply two numbers
const multiply = (a, b) => {
  return a * b;
};

// Divide two numbers
const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Cannot divide by 0');
  }
  return a / b;
};