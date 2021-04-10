//Setting up variables
var generateBtn = document.querySelector("#generate");

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialCharacters = ["!","\"","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"]
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"]


//Function for user information
function userInfo(){
  var passwordLength = parseInt(prompt("How long would you like your password to be? Password should be between 8 and 128 characters long"));
    if(isNaN(passwordLength) === true){
      alert("Please enter a number")
      return
    }
  //alert to ensure user enters a number for the length of their password
  if(passwordLength < 8 || passwordLength > 128){
      alert("Please select the length of your password. Number between 8 and 128 should be entered.")
      return
    }
//asks user to confirm if they want to include the 4 different characters in their password
// var for characteristics picked by user
  var hasUpper = confirm("Do you want your password to include uppercase letters?");
  var hasLower = confirm("Do you want your password to include lowercase letters?");
  var hasSpecial = confirm("Do you want your password to contain special characters?");
  var hasNumeric = confirm("Do you want your password to contain numbers?");
  // if password does not contain at least one of the var listed above. prompt will let user know to fix it
  if(hasUpper === false && hasLower === false && hasSpecial === false && hasNumeric === false){ 
    alert("Please select at least one of the properties listed")
    return
  }
  var userOption = {
    hasUpper, passwordLength, hasLower, hasSpecial, hasNumeric
  }
  return userOption 
}
//randomize what characters will be in the password
function randomizer(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

// Function for generate password
function generatePassword(){
var userOption = userInfo()
var password = []
var possibleOption = []
var guaranteedOption = []

if(userOption.hasUpper){
  possibleOption = possibleOption.concat(upperCase)
  guaranteedOption.push(randomizer(upperCase))
}
if(userOption.hasLower){
  possibleOption = possibleOption.concat(lowerCase)
  guaranteedOption.push(randomizer(lowerCase))
}
if(userOption.hasSpecial){
  possibleOption = possibleOption.concat(specialCharacters)
  guaranteedOption.push(randomizer(specialCharacters))
}
if(userOption.hasNumeric){
  possibleOption = possibleOption.concat(numericCharacters)
  guaranteedOption.push(randomizer(numericCharacters))
}

// For loops for adding random characters in password. to ensure characters desired are added
for (var i=0; i < userOption.passwordLength; i++){
  var possibleName = randomizer(possibleOption)
  password.push(possibleName)
}
for (var i=0; i < guaranteedOption.length; i++){
  password[i] = guaranteedOption[i]
}

return password.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
