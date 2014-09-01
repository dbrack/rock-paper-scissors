function RockPaperScissors(choice) {
	'use strict';

	this.choices = ['rock', 'scissors', 'paper'];
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

	this.getRandomChoice = function() {
		var randomChoice = Math.floor(Math.random() * this.choices.length);
		return this.choices[randomChoice];
	};

	this.computeWinner = function(myChoice, theirChoice) {
		if(myChoice === theirChoice) {
			return 'tie';
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
		choice = this.getRandomChoice();
	} else {
		// make sure we can find the key in our hash table
		choice = choice.toLowerCase();
	}

	this.mine = choice;
	this.theirs = this.getRandomChoice();
}

function play(choice) {
	var game = new RockPaperScissors(choice);
	var winner = game.play();
	alert(winner);
}