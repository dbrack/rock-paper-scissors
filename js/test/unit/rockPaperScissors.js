/* global describe, it, expect */
describe('Unit: Rock paper scissors', function() {

	//var RockPaperScissors = function (choice) {};

	describe('gameplay,', function() {
		describe('rock', function() {
		    it('should crush scissors', function () {
		        var game = new RockPaperScissors();
		        game.mine = 'rock';
		        game.theirs = 'scissors';
		        var winner = game.play();
		        expect(winner).toContain('Win');
		    });
		});

		describe('paper', function() {
		    it('should cover rock', function () {
		        var game = new RockPaperScissors();
		        game.mine = 'paper';
		        game.theirs = 'rock';
		        var winner = game.play();
		        expect(winner).toContain('Win');
		    });
		});

		describe('scissors', function() {
		    it('should cut paper', function () {
		        var game = new RockPaperScissors();
		        game.mine = 'scissors';
		        game.theirs = 'paper';
		        var winner = game.play();
		        expect(winner).toContain('Win');
		    });
		});
	});

	describe('player vs computer', function() {
	    it('should initialize correctly', function () {
	        var game = new RockPaperScissors('rock');
	        expect(game).toBeDefined();
	    });

	    it('should use "rock" as user choice', function () {
	        var game = new RockPaperScissors('rock');
	        expect(game.mine).toEqual('rock');
	    });

	    it('should generate a random choice for opponent', function () {
	        var game = new RockPaperScissors();
	        expect(game.theirs).toBeDefined();
	    });
	});

	describe('computer vs computer', function() {
	    it('should initialize correctly', function () {
	        var game = new RockPaperScissors();
	        expect(game).toBeDefined();
	    });

	    it('should generate two random choices', function () {
	        var game = new RockPaperScissors();
	        expect(game.mine).toBeDefined();
	        expect(game.theirs).toBeDefined();
	    });
	});
});