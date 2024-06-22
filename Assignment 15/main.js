function promptNumbers() {
  const myFavouriteFruit = 'apple';
  let attempts = 5;
  let points = 0;
  
  for (let i = 0; i < attempts; i++) {
    const userGuess = prompt('Guess my favourite fruit:');
    if (userGuess.toLowerCase() === myFavouriteFruit) {
      points = 50 - (i * 10);
      document.getElementById('grade').textContent = `You earned ${points} points.`;
      return;
    }
  }
  
  document.getElementById('grade').textContent = 'You lost.';
}