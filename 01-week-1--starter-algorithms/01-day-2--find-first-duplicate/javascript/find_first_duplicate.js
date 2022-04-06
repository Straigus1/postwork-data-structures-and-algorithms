function findFirstDuplicate(arr) {
  // type your code here
  // let dupContainer = []
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === dupContainer.find(x => x == arr[i])) {
  //     return arr[i]
  //   }

  //  dupContainer.push(arr[i])
  // }
  // return -1
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i]
    } else {
      map[arr[i]] = i;
    }
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 5")
  console.log("=>", findFirstDuplicate([3,5,2,4,5]))
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Iterate over an array. Compare each value to the rest of the array. If the value is found, return that value

// I made a container to place values. For each iteration it would check to see if the value exist in the new container, then push the current value into the new container.
// 
