//create an array with numbers 1-100
function createArray () {
  const oneToHundredArray = []
  let value = 0;
  while (value < 100) {
    value++
    oneToHundredArray.push(value);
  }
  return oneToHundredArray
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
      return 'FizzBuzz'
    } else if (number % 3 === 0) {
      return "Fizz"
    } else if (number % 5 === 0) {
      return "Buzz"
    } else {
      return number
    }
}

function runProgram () {
  array = createArray();
  printNumbers(array);
}

runProgram();
