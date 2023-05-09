//JansueT solution

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

// Mussie's line of code.

function fizzBuzz() {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

console.log(fizzBuzz());

 //Cedric's solution;

module.exports = function () {
  // write your code here
  let array = [];
  for (let i = 1; i <= 100; i++) {
    let value = "";
    if (i % 3 === 0) {
      value += "Fizz";
    }
    if (i % 5 === 0) {
      value += "Buzz";
    }
    if (value !== "") {
      array.push(value);
    } else {
      array.push(i);
    }
  }
  return array;
};
