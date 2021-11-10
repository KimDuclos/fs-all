function flip(repeat) {
  let countHeads = 0;

  for (i = 0; i < repeat; i++) {
    var coinFlip = Math.round(Math.random());
    if (coinFlip === 1) {
      console.log("heads");
      countHeads = countHeads + 1;
    } else {
      console.log("tails");
    }
  }
  console.log(countHeads / repeat);
}
flip(5);
