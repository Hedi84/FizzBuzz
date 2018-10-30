const readline = require('readline-sync');

function userInterfaceLow () {
  console.log("Check numbers from ...?");
  const response = readline.prompt();
  return Number(response);
}

function userInterfaceHigh (numberLow) {
  console.log("Check numbers from " + numberLow + " to...?");
  const response = readline.prompt();
  return Number(response);
}

exports.userInterfaceLow = userInterfaceLow;
exports.userInterfaceHigh = userInterfaceHigh;
// exports.x = 5;
