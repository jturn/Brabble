var alphabet = ['A', 'A', 'A', 'B', 'B', 'C', 'C', 'D',
 'D', 'E', 'E', 'E', 'F', 'G', 'H', 'I', 'I', 'J', 'K', 'L',
 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'O', 'O', 'P', 'Q', 'R', 'R', 'S',
 'S', 'T', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var randomLetter = function(){
	return alphabet[Math.floor(Math.random() * 26)];
};


$(document).ready(function(){

var newTiles = function(){
	$('.tile').each(function(){
		this.innerHTML = randomLetter();
	});
};

newTiles();

});
