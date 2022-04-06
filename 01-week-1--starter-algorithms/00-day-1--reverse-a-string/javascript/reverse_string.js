function reverseString(str) {
  // type your code here
  // if (!typeof str === 'string' || str instanceof String) {
  //   console.log("Not a string")
  // }
  let reversedLetters = []
  for (let i=str.length-1; i > -1; i--) {
    reversedLetters.push(str[i])
  }
  return reversedLetters.join("")
}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ekac")
  console.log("->", reverseString("cake"))
  console.log("");
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Reverse the string by grabbing the last index(letter)
// and iterating over each backwards.

// My solution was to start from the end of the string and iterate over each letter and reducing the i(index).
// With each iteration, push it into an array then return the array stringified.
