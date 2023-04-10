// guess the number game just make it so the user inputs a number and if its the same as the other thing then say you win

let num = Math.floor(Math.random() * 10);

let restartGame = true;

let rangeNum;

let rand;

let lives;

let playAgain;

let cat = "   /_/  / >  ->  (    ^  )<   /______3/3";

let enterNumText = "enter what you want your maximum number to be to guess";

while (restartGame) {
  rangeNum = 0;
  while (!rangeNum || rangeNum < 1) {
    rangeNum = prompt(enterNumText);
    rangeNum = parseInt(rangeNum);
  }

  while (!lives || lives < 1) {
    lives = prompt("How many chances do you need to guess the number?");
    lives = parseInt(lives);
  }

  rand = Math.floor(Math.random() * rangeNum + 1);
  while (lives > 0) {
    guess = prompt("guess the number");
    while (!guess || guess < 1 || guess > rangeNum || guess == "pickle") {
      if (guess == "pickle") {
        alert(`the number is ${rand}`);
      }
      guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
    }
    if (guess == rand) {
      alert(`Congrats you win ${rand} was the number`);
      break;
    } else if (guess < rand) {
      lives--;
      alert(`The number is higher than ${guess}`);
      if (lives > 0) {
        alert(`You have ${lives} lives left`);
      } else {
        alert(`You lose the number was ${rand}`);
        break;
      }
    } else if (guess > rand) {
      lives--;
      alert(`The number is lower than ${guess}`);
      if (lives > 0) {
        alert(`You have ${lives} lives left`);
      } else {
        alert(`You lose the number was ${rand}`);
        break;
      }
    } else {
      alert("enter a number");
    }
  }
  if (lives == 0) {
    playAgain = prompt("Would you like to play again (y or n)");
    if (playAgain == "n") {
      restartGame = false;
      break;
    } else if (playAgain == "y") {
      break;
    }
  }
}
alert(`Thanks for playing!`);
