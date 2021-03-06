	// Variables

	var computerSelection = computerPlay();
	var playerSelection = playerGame();
	var yourScore = 0;
	var compScore = 0;
	var results;

	//Functions

	function computerPlay() {
		var choise = ['rock', 'paper', 'scissors']
	 computerSelection = choise[Math.floor(Math.random()*choise.length)]
		return computerSelection;
	};

	function playerGame () {
		playerSelection = prompt('Rock, Paper or scissors?');
		playerSelection = playerSelection.toLowerCase();
		if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
			return playerSelection;
		} else {
			return 'Please try again!'
		}
	};


	function round(playerSelection, computerSelection) {
		
		switch (true) {
			case playerSelection === computerSelection:
				results = 'It is a tie'; return results;
				break;
			case playerSelection === 'rock' && computerSelection === 'paper':
			case playerSelection === 'paper' && computerSelection === 'scissors':
			case playerSelection === 'scissors' && computerSelection === 'rock':
				results = 'You loose!'; return results;
				break;
			case playerSelection === 'rock' && computerSelection === 'scissors':
			case playerSelection === 'paper' && computerSelection === 'rock':
			case playerSelection === 'scissors' && computerSelection === 'paper':
				results = 'You win!'; return results;
				break;

		}

	};


	function score() {
		if (results === 'You win!') {
		yourScore++;
		} else if (results === 'You loose!') {
		compScore++;
		}
	console.log('Your Score: ' + yourScore);
	console.log('Computer Score: ' + compScore);
	};

	function game() {
		for (let i = 1; i < 6; i++) {
			console.log('Round: ' + i);
			console.log('You: ' + playerGame());
			console.log('Computer: ' + computerPlay());
			round(playerSelection, computerSelection);
			console.log(results)
 			score();

		};
		if (compScore > yourScore) {
			console.log('Finally you loose, try again!');
		} else if (compScore < yourScore) {
			console.log('Congratulation, you win!');
		} else {
			console.log('It is a tie, try again!');
		}
	};

game();