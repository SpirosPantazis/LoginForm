var succesName = "SpirosPantazis";
var succesPswd = "123456789";

function setUserNamePswd(){
   var userName = document.getElementsByName("fullname")[0].value;
   var userPassword = document.getElementsByName('password')[0].value;
    if(userName == succesName && userPassword == succesPswd) {  window.location.href = "https://www.google.com";} 
    return false;
   }
     
function getUserNamePswd() {
    return alert("User name: " + succesName + " Password: " + succesPswd);
}
    
//window.open("https://www.google.com"); } in a new tab    


//in the same tab
//window.location.href = "https://www.google.com"; 

