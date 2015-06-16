var alphabet = ['A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D',
 'D', 'E', 'E', 'E', 'F', 'G', 'H', 'I', 'I', 'I', 'J', 'K', 'L',
 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'O', 'O', 'P', 'Q', 'R', 'R', 'S',
 'S', 'T', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var randomLetter = function(){
	return alphabet[Math.floor(Math.random() * 45)];
};

//Eventually this will all happen on new game intialization

$(document).ready(function(){

var newTiles = function(){
	$('.tile').each(function(){
		var letter = randomLetter();
		this.innerHTML = letter;
		$(this).data('value', letter);
	});
};
		
$('.tile').draggable({
  containment: '#main',
  cursor: 'move',
  revert: 'invalid',
  appendTo: 'td'
});

$('td').droppable({
		accept: '.tile',
		drop: function(event, ui){
  var letter = $(ui.draggable).data('value');
  console.log('FIRING!!!');
	$(this).data('value', letter);
  }

});





// var letterDrop = function(event, ui){
	
// 	var letter = $(this).data('value');
// 	$(this).append($(ui.draggable));

// 	ui.draggable.position({
// 	 of: $(this), 
// 	 my: 'left top', 
// 	 at: 'left top'
// 	});
//   $(this).droppable('disable');


newTiles();

});
