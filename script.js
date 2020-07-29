 

function myFunction() {
  var len = charLength();
  var spec = specialChar();
  var numb = numChar();
  var up = upperCase();
  var low = lowerCase();
  generatePassword(len, spec, up, low, numb);
  console.log(len);
  console.log(spec);
  console.log(up);
  console.log(low);
  console.log(numb);
}


  function charLength() {
    // var userInput = prompt("How many characters would you like in your password?");
    // userInput = parseInt(userInput);
    
    while (true) {
      var userInput = prompt("How many characters would you like in your password?");
      Input = parseInt(userInput);

      if(Number.isInteger(Input) && (Input >= 8 && Input <= 128)) {
        return Input;
      }
      else {
        alert("Please enter an integer between 8 and 128");
      }
    }
  }

  function specialChar() {
      var userSpecial = confirm("Would you like special characters in your password?");
      if (userSpecial === true) {
        return true;
      }
      else {
        return false;
      }
  }

  function upperCase() {
    var userUpper = confirm("Would you like upper case characters in your password?");
    if (userUpper === true) {
      return true;
    }
    else {
      return false;
    }
}

function lowerCase() {
  var userLower = confirm("Would you like lower case characters in your password?");
  if (userLower === true) {
    return true;
  }
  else {
    return false;
  }
}
function numChar() {
  var userNumber = confirm("Would you like numbers in your password?");
  if (userNumber === true) {
    return true;
  }
  else {
    return false;
  }
}

function generatePassword(len, spec, up, low, numb){
  var passwordList = [];
  var passwordStr = ''
  var numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var charList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialList = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

  count = Math.ceil((len/10)*10);
  //If they choose yes to every option:
  //For every 10 character
  //2 special characters
  //3 numbers
  //remaining letters

  if (spec == true && numb == false && up == false && low == false) { 
    for (i = 0; i < len; i++){
      passwordList.push(specialList[Math.floor((Math.random() * (specialList.length)))])
    }
  }
  else if (spec == true && numb == true && up == false && low == false){
    for (i = 0; i < Math.floor(len/2); i++) {
      passwordList.push(specialList[Math.floor((Math.random() * (specialList.length)))])
      passwordList.push(numberList[Math.floor((Math.random() * (numberList.length)))])
    }
  }
  else if (spec == true && numb == true && up == true && low == false){
    for (i = 0; i < count/5; i++) {
      passwordList.push(specialList[Math.floor((Math.random() * (specialList.length)))])
    }
    for (i = 0; i < ((count/10) * 3); i++){
      passwordList.push(numberList[Math.floor((Math.random() * (numberList.length)))])
    }
    var x = len - passwordList.length
    for (i = 0; i < x; i++) {
      passwordList.push(charList[Math.floor((Math.random() * (charList.length)))].toUpperCase())
    }
  }
  else if (spec == true && numb == true && up == true && low == true) {
    for (i = 0; i < count/5; i++) {
      passwordList.push(specialList[Math.floor((Math.random() * (specialList.length)))])
      console.log("Special Char")
    }
    for (i = 0; i < ((count/10) * 3); i++) {
      passwordList.push(numberList[Math.floor((Math.random() * (numberList.length)))])
      console.log("Number")
      }
    var y = Math.floor(((len - passwordList.length)/2));
    console.log(y)
    for (i = 0;  i < y; i++) {
      passwordList.push(charList[Math.floor((Math.random() * (charList.length)))].toUpperCase())
      console.log("Upper Case")
    }
    var x = len - passwordList.length;
    console.log(x)
    for (i = 0; i < x; i++ ) {
      passwordList.push(charList[Math.floor((Math.random() * (charList.length)))])
      console.log("Lower Case")
    }
  }

  if (spec == false && numb == true && up == false && low == false) { 
    for (i = 0; i < len; i++){
      passwordList.push(numberList[Math.floor((Math.random() * (numberList.length)))])
    }
  }
  else if (spec == false && numb == true && up == true && low == false){
    for (i = 0; i < ((count/10) * 3); i++){
      passwordList.push(numberList[Math.floor((Math.random() * (numberList.length)))])
    }
    var x = len - passwordList.length
    for (i = 0; i < x; i++) {
      passwordList.push(charList[Math.floor((Math.random() * (charList.length)))].toUpperCase())
    }
  }
  else if (spec == false && numb == true && up == true && low == true) {
    for (i = 0; i < ((count/10) * 3); i++) {
      passwordList.push(numberList[Math.floor((Math.random() * (numberList.length)))])
      console.log("Number")
      }
    var y = Math.floor(((len - passwordList.length)/2));
    console.log(y)
    for (i = 0;  i < y; i++) {
      passwordList.push(charList[Math.floor((Math.random() * (charList.length)))].toUpperCase())
      console.log("Upper Case")
    }
    var x = len - passwordList.length;
    console.log(x)
    for (i = 0; i < x; i++ ) {
      passwordList.push(charList[Math.floor((Math.random() * (charList.length)))])
      console.log("Lower Case")
    }
  }

  if (spec == false && numb == false && up == true && low == false) { 
    for (i = 0; i < len; i++){
      passwordList.push(charList[Math.floor((Math.random() * (charList.length)))].toUpperCase())
    }
  }
  else if (spec == false && numb == false && up == true && low == true) {
    var y = Math.floor(((len - passwordList.length)/2));
    console.log(y)
    for (i = 0;  i < y; i++) {
      passwordList.push(charList[Math.floor((Math.random() * (charList.length)))].toUpperCase())
      console.log("Upper Case")
    }
    var x = len - passwordList.length;
    console.log(x)
    for (i = 0; i < x; i++ ) {
      passwordList.push(charList[Math.floor((Math.random() * (charList.length)))])
      console.log("Lower Case")
    }
  }
 
  if (spec == false && numb == false && up == false && low == true) { 
    for (i = 0; i < len; i++){
      passwordList.push(charList[Math.floor((Math.random() * (charList.length)))])
    }
  }
  console.log(passwordList)
  passwordStr = passwordList.join("")
  console.log(passwordStr)
  document.getElementById("password").innerHTML = passwordStr;
}