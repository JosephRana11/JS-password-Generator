/* Defined global variable */
var uppercaseStatus;
var numbersStatus;
var specialStatus;
var passwordLength;
var finalPassword = '';
var randomNum;


/* Set to generate password from*/
const lowercaseValues = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const uppercaseValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const numericValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '|', ';', ':', '<', '>', ',', '.', '?', '/', '~', '`'];

/*end of values set */



/* Logic and code for the algorithm */
const button1 = document.querySelector('.generate-box')

button1.addEventListener('click' , () => {
  getOptionsStatus()
  getLengthOption()
  generatePassword()
  console.log(finalPassword)
  displayPassword()
})

function getOptionsStatus(){
  uppercaseStatus = document.getElementById('UpperCase').checked;
  numbersStatus = document.getElementById('Numbers').checked;
  specialStatus = document.getElementById('SpecialChars').checked;
  console.log(uppercaseStatus , numbersStatus , specialStatus)
}

function getLengthOption(){
  passwordLength = Number(document.getElementById('passwordSelection').value)
  console.log(passwordLength)
}

function generatePassword(){
  for(let i =0; finalPassword.length<passwordLength; i++){
    addLowerCase()
    if (uppercaseStatus){
      addUpperCase()
      if (finalPassword.length == passwordLength) {
        break
      }
     
    }
    if (numbersStatus){
      addNumber()
      if (finalPassword.length == passwordLength) {
        break
      }
    }
    if (specialStatus){
      addSpecialChars()
      if (finalPassword.length == passwordLength) {
        break
      }
    }
  }
}

function addLowerCase(){
  randomNum = Math.floor(Math.random()*lowercaseValues.length)
  finalPassword += lowercaseValues[randomNum]
}

function addUpperCase(){
  randomNum = Math.floor(Math.random()*uppercaseValues.length)
  finalPassword += uppercaseValues[randomNum]
}

function addNumber(){
  randomNum = Math.floor(Math.random()*numericValues.length)
  finalPassword += numericValues[randomNum]
}

function addSpecialChars(){
  randomNum = Math.floor(Math.random()*specialChars.length)
  finalPassword += specialChars[randomNum]
}

function displayPassword(){
  document.querySelector('.output-box').value = finalPassword
  /*resetting global variables */
  finalPassword = ''
  passwordLength = 0
}

function copyPassword() {
  const outputBox = document.querySelector('.output-box');
  
  // Select the text in the output box
  outputBox.select();
  
  // Copy the selected text to the clipboard
  document.execCommand('copy');
  
  // Deselect the text (optional)
  window.getSelection().removeAllRanges();

}
