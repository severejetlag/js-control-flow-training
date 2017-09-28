var userLogin = {username: "severejetlag", password: "testpass"};

var isPasswordCorrect;
var loginAttempts = 3; 
var userPass = window.prompt("Enter password for " + userLogin.username, "password")

if(userPass === userLogin.password){
	isPasswordCorrect = true;
	alert("Login Successful!");
}else{
	while (!isPasswordCorrect && loginAttempts > 0){
		userPass = window.prompt("Wrong password for " + userLogin.username + ". You have " + loginAttempts + " attempts remaining.");
		if(userPass === userLogin.password){
			isPasswordCorrect = true;
			alert("Login Successful!");
			break;
		}
		loginAttempts--;
	}
}


