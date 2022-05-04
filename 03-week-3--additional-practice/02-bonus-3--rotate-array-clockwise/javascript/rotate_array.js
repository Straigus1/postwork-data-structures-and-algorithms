function rotateArray(arr, k) {
  // Shift all the values in an array k times
  const rotated = []
  let rotation = 0
  let index = arr.length - k
  // for (let i = arr.length; i > 0; i++) {
  //   rotated.push(i-k)

  // }
  while (rotation < arr.length) {
    rotated.push(arr[index])
    index++
    rotation++
    if (index > arr.length - 1) {
      index = 0
    }
  }
  return rotated
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
