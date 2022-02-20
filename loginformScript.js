var userName = "SpirosPantazis";
var userPassword = "123456789";

function openUrl(){
    var succesName = document.getElementById("nameValue").value;
    var succesPswd = document.getElementById('pswdValue').value;
    if(userName == succesName && userPassword === succesPswd){
        //in a new tab
        window.open("https://www.coderfoundry.com");
        
        //in the same tab
        //window.location.href = "https://www.google.com";
    }      
}

function showUserNamePswd() {
    alert("User name: " + userName + " Password: " + userPassword);
}

