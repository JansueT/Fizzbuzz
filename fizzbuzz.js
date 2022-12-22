module.exports = function () {
  // write your code here
  function FizzBuzz(arr) {
    if (arr % 3 === 0 && arr % 5 === 0) {
      Array.push("FizzBuzz");
    } else if (arr % 3 === 0) {
      Array.push("Fizz");
    } else if (arr % 5 === 0) {
      Array.push("Buzz");
    } else {
      Array.push(arr);
    }
  }
  let Array = [];
  for (let i = 1; i <= 100; i++) {
    FizzBuzz(i);
  }
  return Array;
};
