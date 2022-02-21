var userName = "SpirosPantazis";
var userPassword = "123456789";

function openUrl(){
    var succesName = document.getElementsByName("fullname")[0].value;
    var succesPswd = document.getElementsByName('password')[0].value;
     if(userName == succesName && userPassword === succesPswd) { return window.open("https://www.google.com",);} 
     return false; 
    }

function getUserNamePswd() {
    return alert("User name: " + userName + " Password: " + userPassword);
}
    
//window.open("https://www.google.com"); } in a new tab    


//in the same tab
//window.location.href = "https://www.google.com"; 

