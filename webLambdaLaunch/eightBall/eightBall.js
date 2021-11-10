function eightBall() {
  const answer = Math.floor(Math.random() * 8 + 1);

  let fortunes = [
    "Yes, definitely",
    "You can rely on it",
    "Without a doubt",
    "Most likely",
    "hmm...I'm not sure!",
    "Yikes. Nope.",
    "Try again.",
    "Very doubtful",
  ];

  fortunes.push("I wouldn't if I were you.")

  fortunes.pop();

  fortunes.unshift("I wouldn't if I were you.")

  fortunes.pop();

  for (i=0; i < fortunes.length; i++) {
      console.log(fortunes[i]);
  }
}

eightBall();
