var choice;

// hide play button for initial state
$('#play').hide();
// hide result panel
$('#result').hide();

$('#userGame').on('click', function() {
	$('#result').hide();
	showPlayButon();
});

$('#computerGame').on('click', function() {
	setChoice(undefined);
	$('#result').hide();
	showPlayButon();
});

$('#choiceRock').on('click', function() {
	setChoice('rock');
});

$('#choicePaper').on('click', function() {
	setChoice('paper');
});

$('#choiceScissors').on('click', function() {
	setChoice('scissors');
});

$('#play').on('click', function() {
	playGame();
});

function setChoice(userChoice) {
	choice = userChoice;
}

function showPlayButon() {
	$('#play').show();
}

function playGame() {
	var game = new RockPaperScissors(choice);
	var winner = game.play();

	var style;
	if (winner.indexOf('Win') === 0) { style = 'win'; }
	if (winner.indexOf('Lost') === 0) { style = 'lost'; }
	if (winner.indexOf('Tie') === 0) { style = 'tie'; }

	$('#result').html(winner);
	$('#result').removeClass();
	$('#result').addClass(style);
	$('#result').show();
}