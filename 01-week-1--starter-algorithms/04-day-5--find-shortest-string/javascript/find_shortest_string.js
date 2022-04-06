function findShortestString(arr) {
  // type your code here
  let shortLength = arr[0].length
  let shortestString = arr[0]
  for (let i=0; i < arr.length; i++) {
    if (arr[i].length < shortLength) {
      shortestString = arr[i]
      shortLength = arr[i].length
    }
  }
  return shortestString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Loop through each string in the array. Assign a variable to equal the shortest string. Only allow the value to change if another string length is shorter
// First we reference the length of the first string in the array. Then we iterate over each string and compared it to the next. The moment the strings length
// is less than the lowest string, turn the variable to the new shortest length.
