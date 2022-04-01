function computerPlay() {
	let options = ["rock", "paper", "scissors"];
	let choice = options[Math.floor(Math.random() * 3)];
	return choice;
}

function playRound(playerSelection, computerSelection) {
	let selection = playerSelection.toLowerCase();
	if (selection == "rock") {
		if (computerSelection == "paper") {
			return ["You Lose! Paper beats Rock", 0, 1];
		} else if (computerSelection == "scissors") {
			return ["You Win! Rock beats Scissors", 1, 0];
		} else {
			return ["Draw! You both picked Rock", 0, 0];
		}
	} else if (selection == "paper") {
		if (computerSelection == "paper") {
			return ["Draw! You both picked Paper", 0, 0];
		} else if (computerSelection == "scissors") {
			return ["You Lose! Scissors beats Paper", 0, 1];
		} else {
			return ["You Win! Paper beats Rock", 1, 0];
		}
	} else {
		if (computerSelection == "paper") {
			return ["You Win! Scissors beats Paper", 1, 0];
		} else if (computerSelection == "scissors") {
			return ["Draw! You both picked Scissors", 0, 0];
		} else {
			return ["You Lose! Rock beats Scissors", 0, 1];
		}
	}
}

function isValid(selection) {
	let options = {rock: "rock", paper: "paper", scissors: "scissors"};
	if (!(selection in options)) {
		return false;
	}
	return true;
}

function game() {
	playerScore = 0;
	computerScore = 0;
	for (let i = 0; i < 5; i++) {
		let playerChoice = window.prompt("Please pick Rock, Paper, or Scissors.");
		while (!isValid(playerChoice)) {
			playerChoice = window.prompt("Invalid response. Please pick Rock, Paper, or Scissors.");
		}
		let roundResult = playRound(playerChoice, computerPlay());
		playerScore += roundResult[1];
		computerScore += roundResult[2];
		console.log(roundResult[0] + "\nPlayer Score is " + playerScore + "\nComputer Score is " + computerScore);
	}
	if (playerScore > computerScore) {
		console.log("You Win!");
	} else if (playerScore < computerScore) {
		console.log("You Lose!");
	} else {
		console.log("It's a Draw!");
	}
}

