function RockPaperScissors(choice) {
	'use strict';

	this.constraints = {
		rock: {
			name: 'Rock',
			beats: {
				scissors: 'crushes' // rock crushes scissors
			}
		},
		scissors: {
			name: 'Scissors',
			beats: {
				paper: 'cut', // scissors cut paper
			}
		},
		paper: {
			name: 'Paper',
			beats: {
				rock: 'covers' // paper covers rock
			}
		}
	};

	this.play = function() {
		return this.computeWinner(this.mine, this.theirs);
	};

	this.generateRandomChoice = function() {
	    var choices = Object.keys(this.constraints);
	    var randomChoice = Math.floor(Math.random() * choices.length);
	    return choices[randomChoice];
	};

	this.computeWinner = function(myChoice, theirChoice) {
		if(myChoice === theirChoice) {
			return 'Tie';
		}

		var mine = this.constraints[myChoice];
		var theirs = this.constraints[theirChoice];

		var win = mine.beats[theirChoice] !== undefined;

		if(win) {
			return('Win! ' + mine.name + ' ' + mine.beats[theirs.name.toLowerCase()] + ' ' + theirs.name);
		} else {
			return('Lost! ' + theirs.name + ' ' + theirs.beats[mine.name.toLowerCase()] + ' ' + mine.name);
		}
	};

	// no choice supplied, play computer vs computer
	if(choice === undefined) {
		choice = this.generateRandomChoice();
	} else {
		// make sure we can find the key in our hash table
		choice = choice.toLowerCase();
	}

	this.mine = choice;
	this.theirs = this.generateRandomChoice();
}

function play(choice) {
	var game = new RockPaperScissors(choice);
	var winner = game.play();

	var div = document.createElement('div');
	div.setAttribute("id", "result");
	div.innerHTML = '<span>' + winner + '</span>';
	document.getElementById('game').appendChild(div);
}