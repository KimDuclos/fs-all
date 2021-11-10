const animals = [
    {
      type: 'mouse',
      size: 'small',
      weight: 1
    },
    {
      type: 'dog',
      size: 'small',
      weight: 10
    },
    {
      type: 'lion',
      size: 'medium',
      weight: 150
    },
    {
      type: 'elephant',
      size: 'big',
      weight: 5000
    },
    {
      type: 'tiger',
      size: 'medium',
      weight: 400
    },
    {
      type: 'bat',
      size: 'small',
      weight: 8
    },
    {
      type: 'pig',
      size: 'small',
      weight: 40
    }
  ];

  console.log("CHALLENGE 1");
  const mappedAnimals = animals.map((poop) => {
    console.log(poop.type);
  });

  console.log("CHALLENGE 2");
  console.log("Small Size:")
  const sizeFilter = animals.filter((sizePoop) => {
    return sizePoop.size === "small";
  });
  console.log(sizeFilter);

  console.log("Weight < 100:")
  const weightFilter = animals.filter((weightPoop) => {
    return weightPoop.weight < 100;
  });
  console.log(weightFilter);

  console.log("Weight > 100")
  const bigWeightFilter = animals.filter((bigWeightPoop) => {
    return bigWeightPoop.weight > 100;
  });
  console.log(bigWeightFilter);

  console.log("CHALLENGE 3");
  console.log("Sum of Weights:")
  const addedWeights = animals.reduce((weightTotalPoop, currentWeight) => {
    return weightTotalPoop += currentWeight.weight;
  }, 0);
  console.log(addedWeights);

  console.log("Average of weights:")
  console.log("averageOfWeights:");
  const weightAverage = animals.reduce((wAcc, weightPoop) => {
    return wAcc += weightPoop.weight;
  },0);
  console.log(weightAverage/animals.length);