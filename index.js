const imports = require('./interface.js');



//create an array with numbers 1-100
function createArray (number) {
  const numbersArray = []
  let value = 1;
  while (value < number) {
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
    number = fizzBuzz(array[i]);
    newArray.push(number);
  }
  console.log(newArray);
}

// checks if the number is a multiple of 3 and 5(FizzBuzz), 3(Fizz), or 5 (FizzBuzz)
function fizzBuzz (number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return fezz(number, 'FizzBuzz')
    } else if (number % 7 === 0 && number % 3 === 0) {
      return fezz(number, 'FizzBang')
    } else if (number % 7 === 0 && number % 5 === 0) {
      return fezz(number, 'BuzzBang')
    } else if (number % 11 === 0) {
      return fezz(number, 'Bong')
    } else if (number % 13 === 0) {
      return "Fezz"
    } else if (number % 3 === 0) {
      return fezz(number, 'Fizz')
    } else if (number % 5 === 0) {
      return fezz(number, 'Buzz')
    } else if (number % 7 === 0) {
      return fezz(number, 'Bang')
    } else {
      return number
    }
}

// check if the number is also a multiple of 13 and apply fezz rules
function fezz (number, word) {
  if (number % 13 === 0 && word === 'Fizz') {
    return 'FizzFezz'
  } else if (number % 13 === 0 && word === 'FizzBuzz') {
    return 'FizzFezzBuzz'
  } else if (number % 13 === 0 && word === 'FizzBang') {
    return 'FizzFezzBang'
  } else if (number % 13 === 0 ) {
    return word + 'Fezz'
  } else {
    return word
  }
}

// run program
function runProgram () {
  number = imports.userInteface()
  array = createArray(number);
  printNumbers(array);
}

runProgram();
