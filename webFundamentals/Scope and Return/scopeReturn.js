let flip = (repeat) => {
  let countHeads = 0;
  for (let i = 0; i < repeat; i++) {
    let coinFlip = Math.round(Math.random());
    if (coinFlip === 1) {
      console.log("heads");
      countHeads++;
    }
    if (coinFlip === 0) {
      console.log("tails");
    }
  }

  return console.log((countHeads / repeat));
};

flip(5);