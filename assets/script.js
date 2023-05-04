// Set var for the code
var generateBtn = document.querySelector("#generate");
var finalPasssword = "";
var passwordSource = "";
var lowercaseArray = "abcdefghijklmnopqrstuvwxyz";
var uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericArray = "0123456789";
var specialCharArray = ".,+*?^$()[]{}|";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function generatePassword() {
  finalPasssword = ""
  console.log("You click 'Generate Password' button");
  var pwLength = prompt("What would you like your password's length to be? Please make sure your password at least 8 and no more than 128");
  // Giving user options of characters to choose from 
if (pwLength >=8 && pwLength <=128){
var lowercase = confirm("Do you want to have a lower case letters?");
var uppercase = confirm("Do you want to have a upper case letters?");
var numeric = confirm("Do you want to have a numbers in your password?");
var specialchar = confirm("Do you want to have a special character in your password?");
if (lowercase) passwordSource += lowercaseArray;
if (uppercase) passwordSource += uppercaseArray;
if (numeric) passwordSource += numericArray;
if (specialchar) passwordSource += specialCharArray;
// Add alert if user didn't pick any of the caharcters
if (passwordSource.length === 0) {alert("Please..") 
return ""}  
// For loop for creating password from user's picks of proposed variables of characters 
for (i=0; i<pwLength; i++) {
var randomIndex = getRandomInt (0, passwordSource.length)
console.log(randomIndex)
var randomChar = passwordSource [randomIndex];
console.log (randomChar)
finalPasssword += randomChar
}

} else {alert("Please make sure your password at least 8 and no more than 128")}
return finalPasssword 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var TextOutput = document.querySelector("#password");
  TextOutput.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

