console.log("security_questions.js loaded");

//Create array to hold question objects
var securityQuestions = [
	{question: "What is your dog's name?", expectedAnswer:"woofer"},
	{question: "In what city were you born?", expectedAnswer:"sf"},
	{question: "Where did you last work?", expectedAnswer: "google"}
]

//Select question
for(var i = 0; i < securityQuestions.length; i++){
	var userAnswer = window.prompt(securityQuestions[i].question);
	if(securityQuestions[i].expectedAnswer !== userAnswer){
		alert("Incorrect answers!");
		break;
	}
}