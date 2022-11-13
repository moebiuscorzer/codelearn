"use strict";

function showMessage(message) {
  document.getElementById("message").textContent = message;
}
function logMessage(message) {
  let now = new Date();
  console.log(now.toDateString() + " - " + message);
}
/* Function expression */
let fn = function altLogMessage() {};
fn(); // correct
// altLogMessage() is only information for the reader
function getSecretCode(value) {
  let code = value * 42;
  return code;
}
console.log(getSecretCode(2));

/*
logMessage("Just a test");
logMessage("Just another test");
*/
