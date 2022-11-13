function showMessage(message) {
  document.getElementById("message").textContent = message;
}
function logMessage(message) {
  console.log(message);
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
