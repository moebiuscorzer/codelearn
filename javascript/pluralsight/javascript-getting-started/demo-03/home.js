let price = 12,
  taxRate = 0.07;
const productName = "Hiking Boots";
const discounted = false;

//price = 5;

/*
 ! Variable names
 * Must start with _ $ letter
 * Remarks:
 *   > _name generally denotes a private variable
 *   > __proto__ generally denotes a non-standard behaviour
*/

//showMessage(price * taxRate);
//++price; // starts from 12, gets incremented and printed as 13
//showMessage(price++); // starts from 13, gets printed as 13 and gets incremented to 14
//console.log(price); // displayed in console as 14

let message = `Find our ${productName}`;
message = message + "!";
//message = message.toLowerCase();

// showMessage(message);

price = price.toString(); // typeof price is now a string

let amount = "123.12A";
amount = Number.parseFloat(amount); //typeof amount is now an amount
showMessage(amount); // ignores anything that is not a number or a . or a ,

let saved = true;
saved = !saved; // saved is now false
