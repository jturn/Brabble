var alphabet = ['A', 'A', 'A','A','A', 'A', 'A', 'A', 'B', 'B', 'B', 
 'C', 'C', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E',
 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I',
 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'M', 'N', 'N',
 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q',
 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'U', 'V', 
 'W', 'W', 'X', 'Y', 'Y', 'Z'];

var randomLetter = function(){
	return alphabet[Math.floor(Math.random() * 82)];
};

function fancyAlert(msg) {
  jQuery.fancybox({
      'modal' : true,
      'content' : "<div style=\"margin:1px;width:600px;height:300px;\"><h1>"+msg+"</h1><div style=\"text-align:center;margin-top:10px;\"><input style=\"margin:3px;padding:0px;height:60px;width:200px;border-radius:20px;font-size:35px;background:#1D263B;outline:none;position:absolute;bottom:0;left:200px;border:none;color:white;\" type=\"button\" onclick=\"jQuery.fancybox.close();\" value=\"Play again?\"></div></div>"
  });
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
	  cursor: 'move',
	  revertDuration: 400,
	  revert: 'invalid',
	  appendTo: 'td'
	});

	$('td').droppable({
	  accept: '.tile',
	  tolerance: "fit",
	  drop: function(event, ui){
	    var letter = $(ui.draggable).data('value');
	    $(this).data('value', letter.toLowerCase());
	  }
	});

  newTile();
};

var startGame = function(){
 var clock = $('.timer').FlipClock(60, {
	autoStart: false,
	countdown: true,
	clockFace: 'Counter'
});

var count = 60;
var interval;

var countdownTimer = function(){
  interval = setInterval(countdown, 1000);
};

var countdown = function(){
  if (count > 0){
  	clock.decrement();
    count--;
  } else {
    clearInterval(interval);
    endGame();
    }
	};
	countdownTimer();
};

var endGame = function(){
  count = 60;
  var total = checkWords();
  fancyAlert('Total words: ' + total);
	if (total > $('.score').text()){
		$('.score').text(total + '');
	}
};

var checkWords = function(){
  var count = 0;
  var playerWords = [];
  
  //Check horizontal rows
  for (var i = 1; i <= 13; i+=4) {
		var currentWord = $('.box' + i).data("value") + $('.box' + (i+1)).data("value") + $('.box' + (i+2)).data("value") + $('.box' + (i+3)).data("value") || "zzzz";
		playerWords.push(currentWord);
		playerWords.push(currentWord.split("").reverse().join(""));
	}
	// Check vertical columns
	for (var i = 1; i <= 4; i++) {
		var currentWord = $('.box' + i).data("value") + $('.box' + (i+4)).data("value") + $('.box' + (i+8)).data("value") + $('.box' + (i+12)).data("value") || "zzzz";
		playerWords.push(currentWord);
		playerWords.push(currentWord.split("").reverse().join(""));
	}

  //Check right diagonal
	var currentWord = $('.box1').data("value") + $('.box6').data("value") + $('.box11').data("value") + $('.box16').data("value") || "zzzz";
	playerWords.push(currentWord);
	playerWords.push(currentWord.split("").reverse().join(""));
  
  //Check left diagonal
	var currentWord = $('.box4').data("value") + $('.box7').data("value") + $('.box10').data("value") + $('.box13').data("value") || "zzzz";
	playerWords.push(currentWord);
	playerWords.push(currentWord.split("").reverse().join(""));
  
  for (var i = 0; i < playerWords.length; i++){
  	if (_.contains(dictionary, playerWords[i])) {
  		count++;
  	}
  }
  return count;

};

$(document).ready(function(){

$('.start').on('click', function(){
	newGame();
	startGame();
});

});
