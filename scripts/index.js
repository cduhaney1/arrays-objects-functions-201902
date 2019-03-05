function isPositive(value) {
    return value > 0;
  }
  
  let filtered = [5, -2, 4, -1, 10].filter(isPositive);
  console.log(filtered);
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.