const readline = require('readline-sync');

function userInterface () {
  console.log("Check numbers from 1 to...?");
  const response = readline.prompt();
  return Number(response);
}

exports.userInteface = userInterface;
// exports.x = 5;
