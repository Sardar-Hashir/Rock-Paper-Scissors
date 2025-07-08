function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('user-choice').innerText = Your Choice: ${userChoice};
  document.getElementById('computer-choice').innerText = Computer's Choice: ${computerChoice};

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You win! 🎉';
  } else {
    result = 'You lose! 😢';
  }

  document.getElementById('outcome').innerText = Result: ${result};
}
