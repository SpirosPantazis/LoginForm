var succesName = "SpirosPantazis";
var succesPswd = "123456789";

function setUserNamePswd(){
    var userName = document.getElementsByName("fullname")[0].value;
    var userPassword = document.getElementsByName('password')[0].value;
     if((userName == succesName) && (userPassword == succesPswd)) { return window.open("https://www.google.com",);} 
     return alert("Υπαρχει πρόβλημα είτε στο userName είτε στο Password"); 
    }

function getUserNamePswd() {
    return alert("User name: " + userName + " Password: " + userPassword);
}
    
//window.open("https://www.google.com"); } in a new tab    


//in the same tab
//window.location.href = "https://www.google.com"; 

