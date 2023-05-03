// Assignment Code
var generateBtn = document.querySelector("#generate");
var finalPasssword = ""
var passwordSource 
var lowercasearray = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"]
var uppercasearray = ["A B C D E F G H I J K L M N O P Q R S T U V W X Y Z"]
var numericarray = ["0,1,2,3,4,5,6,7,8,9"]
var specialchararray = [". , + , * , ? , ^ , $ , ( , ) , [ , ] , { , } , | , \ "]



function generatePassword() {
  console.log("You click 'Generate Password' button");
  var pwlength = prompt("What would you like your password's length to be? Please make sure your password at least 8 and no more than 128") 
if (pwlength >=8 && pwlength <=128){
var lowercase = confirm("Do you want to have a lower case letters?")
var uppercase = confirm("Do you want to have a upper case letters?")
var numeric = confirm("Do you want to have a numbers in your password?")
var specialchar = confirm("Do you want to have a special character in your password?")
// 4 if statemets with pssword sourse += lowecasearray
// for loop 

} else {alert("Please make sure your password at least 8 and no more than 128")
}
  

return "..."
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var TextOutput = document.querySelector("#password");

  TextOutput.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Pseudo code
// 1. When I click "Generate passsword" - I'm presenting with promps for password criteria