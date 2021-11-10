const data = [
    {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
    {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
    {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
    {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
  ];

//   const mappedCityStates = data.map((poop) => {
//       console.log({"city": poop.city, "state": poop.state});
//   });

// const arrayOfPops = data.map(state => state.population);
// console.log(arrayOfPops)


// const reduceStatePopulations = data.reduce((poopTotal, state) => {
//   return poopTotal += state.population;
// }, 0);

// console.log("REDUCED POPULATIONS: ")
// console.log(reduceStatePopulations);


const largeLandArea = data.filter((state) => {
  return state.land_area >= 50;
});


console.log("These are the bigguns:")
const mapLargeLand = largeLandArea.map((mapPoop) => {
  console.log({"land size: ": mapPoop.land_area})
});