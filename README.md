# Rock Paper Scissors, in JavaScript

This is a simple [rock paper scissors](http://en.wikipedia.org/wiki/Rock-paper-scissors) implementation in JavaScript.

This project requires [npm](https://www.npmjs.org) in order to install dependencies.

``` bash
npm install
```

## Grunt Tasks

**Tests**

Execute

``` bash
grunt test
```
to run unit tests and generate test coverage report.

## Extending the game

The natural extension of this game would probably be [Rock-paper-scissors-lizard-Spock](http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock). This can be achieved by simply extending the constraint object in the RockPaperScissors class.

Here's a quick example for ```lizard```

``` javascript
this.constraints = {
	rock: {
		name: 'Rock',
		beats: {
			scissors: 'crushes',
			lizard: 'crushes'
		}
	},
	scissors: {
		name: 'Scissors',
		beats: {
			paper: 'cut', // scissors cut paper
			lizard: 'decapitates'
		}
	},
	paper: {
		name: 'Paper',
		beats: {
			rock: 'covers' // paper covers rock
		}
	},
	lizard: {
		name: "Lizard",
		beats: {
			paper: 'eats',
			spock: 'poisons'
		}
	},
};
```