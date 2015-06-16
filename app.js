var alphabet = ['A', 'A', 'A', 'B', 'B', 'C', 'C', 'D',
 'D', 'E', 'E', 'E', 'F', 'G', 'H', 'I', 'I', 'I', 'J', 'K', 'L',
 'L', 'M', 'M', 'N', 'N', 'O', 'O', 'O', 'O', 'P', 'Q', 'R', 'R', 'S',
 'S', 'T', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var randomLetter = function(){
	return alphabet[Math.floor(Math.random() * 44)];
};

var newGame = function(){
  
  $('.tileHolder').empty();
  for (var i = 0; i <= 15; i++){
  	$('.tileHolder').append("<div class='tile'></div>");
  };

	var newTile = function(){
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
		    $(this).data('value', letter);
	  }
	});

  newTile();
};

 

var startGame = function(){
	var count = 5;
	var interval;

	var countdownTimer = function(){
		interval = setInterval(countdown, 1000);
	};

	var countdown = function(){
	  if (count > 0){
	  	console.log('inside counter loop');
	    count--;
	    $('.timer').text('0:' + count);
	  } else {
        clearInterval(interval);
        endGame();
      }
	};

	countdownTimer();

};

var endGame = function(){
	alert("Total words: 0!");
  count = 60;
  $('.timer').text("1:00");
};

// var checkWords = function(){

// };


$(document).ready(function(){

$('.start').on('click', function(){
	newGame();
	startGame();
});

});
