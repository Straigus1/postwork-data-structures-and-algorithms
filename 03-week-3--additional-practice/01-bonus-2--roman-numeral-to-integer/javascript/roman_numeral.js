function romanNumeral(string) {
  // Convert characters in a string into numerical values
  // If lower letter is before bigger number, subtract that value
  let num = 0
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == "I") {
      num = num + 1
    }
    if (string.charAt(i) == "V") {
      num = num + 5
    }
    if (string.charAt(i-1) == "I" && (string.charAt(i) == "V" || string.charAt(i) == "X")) {
      num = num - 2
    }
    if (string.charAt(i) == "X") {
      num = num + 10
    }
    if (string.charAt(i) == "L") {
      num = num + 50
    }
    if (string.charAt(i-1) == "X" && (string.charAt(i) == "L" || string.charAt(i) == "C")) {
      num = num - 20
    }
    if (string.charAt(i) == "C") {
      num = num + 100
    }
    if (string.charAt(i) == "D") {
      num = num + 500
    }
    if (string.charAt(i-1) == "C" && (string.charAt(i) == "D" || string.charAt(i) == "M")) {
      num = num - 200
    }
    if (string.charAt(i) == "M") {
      num = num + 1000
    }
   
  }
  return num
  // const romans = {
  //   I: 1,
  //   IV: 4,
  //   V: 5,
  //   IX: 9,
  //   X: 10,
  //   XL: 40,
  //   L: 50,
  //   XC: 90,
  //   C: 100,
  //   CD: 400,
  //   D: 500,
  //   CM: 900,
  //   M: 1000
  // };
  // let total = 0;
  // let idx = 0;

  // while (idx < string.length) {
  //   const twoChar = string[idx] + (string[idx + 1] || '');

  //   if (romans[twoChar] !== undefined) {
  //     total += romans[twoChar];
  //     idx += 2;
  //   } else {
  //     total += romans[string[idx]];
  //     ++idx;
  //   }
  // }

  // return total;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
