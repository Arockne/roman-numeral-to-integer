
//i
  //string of roman numeral
//o
  //ruman numeral numerical conversion
//e
  //input will always be length of one
  //input will always be uppercase letters

function romanNumeral(string) {

  // let conversion = 0;

  // const numeral = {
  //   'I': 1,
  //   'V': 5,
  //   'X': 10,
  //   'L': 50,
  //   'C': 100,
  //   'D': 500,
  //   'M': 1000
  // }

  // for (let i = string.length - 1; i >= 0; i--) {
  //   conversion += numeral[string[i]]
  //   if (((string[i] === 'V' || string[i] === 'X') && string[i - 1] === 'I')
  //   || ((string[i] === 'L' || string[i] === 'C') && string[i - 1] === 'X')
  //   || ((string[i] === 'D' || string[i] === 'M') && string[i - 1] === 'C')
  //   ) {
  //     conversion -= numeral[string[i - 1]]
  //     i -= 1;
  //   }
  // }

  // return conversion

  if (string.length === 0) {
    return 0;
  }
  const numeral = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  }
  const i = string.length - 1
  let calculation = 0;
  if (((string[i] === 'V' || string[i] === 'X') && string[i - 1] === 'I')
    || ((string[i] === 'L' || string[i] === 'C') && string[i - 1] === 'X')
    || ((string[i] === 'D' || string[i] === 'M') && string[i - 1] === 'C')
  ) {
    calculation = romanNumeral(string.slice(0, i - 1)) + numeral[string[i - 1] + string[i]]
  } else {
    calculation = romanNumeral(string.slice(0, i)) + numeral[string[i]]
  }
  
  return calculation
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
