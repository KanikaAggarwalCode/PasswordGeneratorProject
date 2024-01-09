// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  let LengthPassword = prompt("please enter the length of the password, should be At least 8 characters but no more than 128. ");

  if (LengthPassword < 8){
    alert("Bad Input");
    return null;
  }

  if (LengthPassword > 128){
    alert("Bad Input");
    return null;
  }
      let numberLowercaseCharacters = confirm("Do you want to include lower case characters ");
      let numberUppercaseCharacters = confirm("Do you want to include upper case characters ");
      let numberNumericCharacters = confirm("Do you want to include numeric characters ");
      let numberSpecialCharacters = confirm("Do you want to include special characters ");
      
    
  if (numberLowercaseCharacters) {  }
  else if (numberUppercaseCharacters) {  }
  else if (hasLowercaseCharacters) {  }
  else if (hasUppercaseCharacters) {  }
  else {
    alert("Password must include at least one character type.")
  }

}

// Function for getting a random element from an array
 function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;
 }

// Function to generate password with user input
function generatePassword() {
  
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);