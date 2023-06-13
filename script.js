// Assignment Code
var generateBtn = document.querySelector("#generate");

var options = {
 lowercase: "abcdefghijklmnopqrstuvwxyz",
 uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
 numbers: "0123456789",
 specialCharacters: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
}

function generatePassword () {
  var passwordLength = prompt("Enter Password Length")

if (passwordLength > 128 || passwordLength < 8) {
  alert("Password Not Long Enough");
  return;
}
  var includeLowercase = confirm("Do you want to include lowercase characters?");
  var includeUppercase = confirm("Do you want to include uppercase characters?");
  var includeNumbers = confirm("Do you want to include numeric characters?");
  var includeSpecialCharacters = confirm("Do you want to include special characters?");
  
if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
  alert("You must select at least one type!");
  return;
}

var availableCharacters = "";
if (includeLowercase) {
  availableCharacters += options.lowercase;
}
if (includeUppercase) {
  availableCharacters += options.uppercase;
}
if (includeNumbers) {
  availableCharacters += options.numbers;
}
if (includeSpecialCharacters) {
  availableCharacters += options.specialCharacters;
}

var password = "";
for (var i = 0; i < passwordLength; i++) { 
  var randomIndex = Math.floor(Math.random() * availableCharacters.length);
  password += availableCharacters.charAt(randomIndex);
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

