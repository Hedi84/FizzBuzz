const imports = require('./interface.js');



//create an array with numbers 1-100
function createArray (numberLow, numberHigh) {
  const numbersArray = []
  let value = numberLow;
  while (value < numberHigh) {
    value++
    numbersArray.push(value);
  }
  return numbersArray
}

// prints numbers 1 to 100
function printNumbers (array) {
  newArray = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    number = isWord(array[i]);
    // newNumber = reverse(number)
    newArray.push(number);
  }
  console.log(newArray);
}

// checks if the number is a multiple
// function multiple(number, multiple) {
//   if (number % multiple === 0) {
//     return true
//   } else {
//     return false
//   }
// }
// returns number or word
function isWord (number) {
    // var pickedNumbers = [3, 5, 7, 11, 13, 17]
    // for (let i = 0; i < pickedNumbers.length; i++) {
      // let multiple = pickedNumbers[i]
      // if (multiple(number, multiple) === true) {
      let string = ""
      string = three(number, string);
      string = five(number, string);
      string = seven(number, string);
      string = eleven(number, string);
      string = seventeen(number,string);
      if (string === "") {
        return number
      }  else {
        return string
      }
}

// function threeAndFive (number) {
//   if (number % 3 === 0 && number % 5 === 0) {
//     return 'FizzBuzz';
//   } else {
//     return false;
//   }
// }
//
// function sevenAndThree (number) {
//   if (number % 7 === 0 && number % 3 === 0) {
//     return 'FizzBang';
//   } else {
//     return false;
//   }
// }
//
// function sevenAndFive (number) {
//   if (number % 7 === 0 && number % 5 === 0) {
//     return 'BuzzBang';
//   } else {
//     return false;
//   }
// }

function eleven (number, string) {
if (number % 11 === 0) {
    string = 'Bong';
  }
  return string
}

function three (number, string) {
  if (number % 3 === 0) {
    string = string + 'Fizz';
  }
  return string
}


function five (number, string) {
  if (number % 5 === 0) {
    string = string + 'Buzz';
  }
  return string
}

function seven (number, string) {
  if (number % 7 === 0) {
    string = string + 'Bang';
  }
  return string
}

function thirteen (number) {
  if (number % 13 === 0) {
    return 'Fezz';
  } else {
    return false;
  }
}

function seventeen (number, string) {
  if (number % 17 === 0 && string !== "") {
    array = string.match(/.{1,4}/g);
    reversedArray = array.reverse();
    string = reversedArray.join("");
  }
  return string
}
//
// function fizzBuzz(number) {
//   if (threeAndFive(number) !== false) {
//     return threeAndFive(number)
//   } else if (five(number) !== false) {
//     return five(number);
//   }else if (three(number) !== false) {
//     return three(number);
//   }
// }
//
// // check if the number is also a multiple of 13 and apply fezz rules
// function fezz (number, word) {
//   if (number % 13 === 0 && word === 'Fizz') {
//     return 'FizzFezz'
//   } else if (number % 13 === 0 && word === 'FizzBuzz') {
//     return 'FizzFezzBuzz'
//   } else if (number % 13 === 0 && word === 'FizzBang') {
//     return 'FizzFezzBang'
//   } else if (number % 13 === 0 ) {
//     return 'Fezz' + word
//   } else {
//     return word
//   }
// }
//
// function reverse (number, word) {
//   if (number % 17 === 0) {
//     array = word.split();
//     reversedArray = array.reverse();
//     return reversedArray.join("");
//   } else {
//     return word
//   }
// }

// pick mulitple numbers
// function pickNumbers () {
//   pickedNumbers = []
//   while (input !== c) {
//
//
//   }
// }

// run program
function runProgram () {
  numberLow = imports.userInterfaceLow()
  numberHigh = imports.userInterfaceHigh(numberLow)
  array = createArray(numberLow, numberHigh);
  printNumbers(array);
}

runProgram();
