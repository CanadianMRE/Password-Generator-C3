// Assignment Code
var generateBtn = document.querySelector("#generate");

const PSWDMINLEN = 8
const PSWDMINMAX = 128

const UPPERCASECHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASECHARS = "abcdefghijklmnopqrstuvwxyz";
const NUMERICCHARS = "1234567890";
const SPECIALCHARS = "!#$%&'*+,-./:;<=>?@^_`|~";

function generatePassword() {
  // Declare all our booleans for options
  let length;
  let lowercase;
  let uppercase;
  let numeric;
  let specialChar;

  // Get all our parameters
  while (true) {
    length = window.prompt("How long should the password be? ("+PSWDMINLEN+" - "+PSWDMINMAX+")")
    length = Number(length);
    if (length != NaN && length >= PSWDMINLEN && length <= PSWDMINMAX) {
      break;
    } else {
      window.alert("Length must be "+PSWDMINLEN+" to "+PSWDMINMAX);
    }
  }

  while (true) {
    lowercase = window.confirm("Do you want to include lowercase characters (a-z) in your password?");
    uppercase = window.confirm("Do you want to include uppercase characters (A-Z) in your password?");
    numeric = window.confirm("Do you want to include numbers (0-9) in your password?");
    specialChar = window.confirm("Do you want to include special characters (!@#$%^&*) in your password?");

    if (lowercase || uppercase || numeric || specialChar) {
      break;
    } else {
      window.alert("You must select atleast one character type! Please try again!");
    }
  }

  // Assemble password
  let password = "";
  let possiblechars = "";

  if (lowercase) {
    possiblechars += LOWERCASECHARS;
  }

  if (uppercase) {
    possiblechars += UPPERCASECHARS;
  }

  if (numeric) {
    possiblechars += NUMERICCHARS;
  }

  if (specialChar) {
    possiblechars += SPECIALCHARS;
  }

  for (let i = 0; i < length; i++) {
    password += possiblechars.charAt(Math.floor(Math.random() * possiblechars.length));
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
