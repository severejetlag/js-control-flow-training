console.log("sing.js loaded");
	
var verseCount = window.prompt("How many verses would you like?");

for(var i = verseCount, verseText; i > 1; i--){
	if((i - 1) > 1){
		verseText = `${i} bottles of beer on the wall,\n${i} bottles of beer! \nTake one down and pass it around,\n${i - 1} bottles of beer on the wall!`;
	}else{
		verseText = `${i} bottles of beer on the wall,\n${i} bottles of beer! \nTake one down and pass it around,\n${i - 1} bottle of beer on the wall!`;
	}
	console.log(verseText);
}