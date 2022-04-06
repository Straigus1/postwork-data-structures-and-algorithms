function fibonacci(num) {
  // type your code here
  let numContainer = [0, 1]
  let currentNum = 0
  for (let i = 2; i <= num; i++) {
    currentNum = numContainer[i-2] + numContainer[i-1]
    numContainer.push(currentNum)
  }
  return numContainer[num]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));
  console.log(fibonacci(20))
  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Create a fibonacci sequence within the function. Make an Array that starts with 0 and 1, then add the values together over and ove based on number(param)

// Created a fibonacci sequence that looped based on the number(arguement). Then called the index from ym new array.
