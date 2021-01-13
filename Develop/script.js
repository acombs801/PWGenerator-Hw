// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
      charset = "";
      charsetNum = "1234567890";
      charsetLower = "abcdefghijklmnopqrstuvwxyz";
      charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      charsetSpecial = "`!@#$%^&*~";
  
      password = "";

  var useLower = prompt('Do you want any lowercase letters? Yes or no.').toLowerCase();
    if (useLower === "yes"){
      charset += charsetLower;
    }
    
    var useUpper = prompt('Do you want any Uppercase letters? Yes or no.').toLowerCase();
    if (useUpper === "yes"){
      charset += charsetUpper;
    }

    var useNum = prompt('Do you want any Numbers? Yes or no.').toLowerCase();
    if (useNum === "yes"){
      charset += charsetNum;
    }

    var useSpecial = prompt('Do you want any Special characters? Yes or no.').toLowerCase();
    if (useSpecial === "yes"){
      charset += charsetSpecial;
    }

    console.log(charset);
  
  var pwLength = parseInt(prompt('How many chars? 8 - 128'));
      
  for (var i = 0, n = charset.length; i < pwLength; ++i) {
     password += charset.charAt(Math.floor(Math.random() * n));
     }

     console.log(pwLength);

     return password;
     
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
