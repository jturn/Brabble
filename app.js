var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
                'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
                'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

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
