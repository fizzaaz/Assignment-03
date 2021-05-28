// Assignment code here
var numChar = "123456789"
var specChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowChar = "abcdefghijklmnopqrstuvwxyz"
var upChar=lowChar.toUpperCase();
var length;
//Boolean variables to check creteria
var checkNum,checkSpec,checkUp ,checklow; 
var Characters="";

function generatePassword() {
    var pass="";
    length = parseInt(prompt("Please! Enter the Length of your Password?"));
    console.log(length)

    if (length < 8 || !length) {
        alert("Opps! Try Again.\nYour Password should be atleast 8 Characters long.")
    }
    else if (length >128) {
        alert("Opps! Try Again.\nYour Password should be less than 128 Characters.")
    }
    else {
        checkNum = confirm("Would you like Numbers in your Password?");
        checkSpec = confirm("Would you like Special Charaters in your Password?")
        checkUp = confirm("Would you like Uppercase letters in your Password?")
        checklow = confirm("Would you like Lowercase letters in your Password?")
        if (!checkNum && !checkSpec && !checkUp && !checklow) {
            alert("Opps! Try Again.\nYou must choose atleast one charater type.")
        }
        else if (checkNum && checkSpec && checkUp && checklow)//4 possbile choices
        {
            Characters=numChar.concat(specChar,upChar,lowChar);//concatinates the choosed characters
        }
        else if (checkNum && checkSpec && checkUp && !checklow)//3 possbile choices
        {
            Characters=numChar.concat(specChar,upChar);//concatinates the choosed characters
        }
        else if (checkNum && checkSpec && !checkUp && checklow)//3 possbile choices
        {
            Characters=numChar.concat(specChar,lowChar);//concatinates the choosed characters
        }
        else if (checkNum && !checkSpec && checkUp && checklow)//3 possbile choices
        {
            Characters=numChar.concat(lowChar,upChar);//concatinates the choosed characters

        }
        else if (!checkNum && checkSpec && checkUp && checklow)//3 possbile choices
        {
            Characters=lowChar.concat(specChar,upChar);//concatinates the choosed characters

        }
        else if (!checkNum && !checkSpec && checkUp && checklow)//2 possbile choices
        {
            Characters=lowChar.concat(upChar);//concatinates the choosed characters
        }
        else if (!checkNum && checkSpec && !checkUp && checklow)//2 possbile choices
        {
            Characters=specChar.concat(lowChar);//concatinates the choosed characters
        }
        else if (!checkNum && checkSpec && checkUp && !checklow)//2 possbile choices
        {
            Characters=specChar.concat(upChar);//concatinates the choosed characters
        }
        else if (checkNum && !checkSpec && !checkUp && checklow)//2 possbile choices
        {
            Characters=numChar.concat(lowChar);//concatinates the choosed characters
        }
        else if (checkNum && !checkSpec && checkUp && !checklow)//2 possbile choices
        {
            Characters=numChar.concat(upChar);//concatinates the choosed characters          
        }
        else if (checkNum && checkSpec && !checkUp && !checklow)//2 possbile choices
        {
            Characters=numChar.concat(specChar);//concatinates the choosed characters
        }
        else if (checkNum)//1 possbile choice
        {
            Characters=numChar;
        }
        else if (checkSpec)//1 possbile choices
        {
            Characters=specChar;
        }
        else if(checkUp)//1 possible choice
        {
            Characters=upChar;
        }
        else// last possible choice
        {
            Characters=lowChar;
            console.log(Characters)
        }
        for(var i=0;i<length;i++)
        {
            pass+=Characters.charAt(Math.floor(Math.random()*Characters.length));
        }
    }
 return pass;   
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
