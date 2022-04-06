function selectionSort(arr) {
  // type your code here
  let sortedArray = []
  // let lastIndex = sortedArray.length-1
  // sortedArray.push(arr[0])
  // for (let i = 1; i < arr.length; i++) {
  //   if (sortedArray[lastIndex] < arr[i]) {
  //     sortedArray.push(arr[i])
  //   } else {
  //     while(arr[i] < sortedArray[lastIndex]) {
  //       lastIndex--
  //     }

  //   }
    
  // }
  while (arr.length > 0) {
    let min = Math.min(...arr)
    let index = arr.indexOf(min)

    sortedArray.push(min)
    arr.splice(index,1)
  }
  return sortedArray
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
