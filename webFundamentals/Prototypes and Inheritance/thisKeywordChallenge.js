const yourObject = {
    name: 'Dan Frehner',
    city: 'Salt Lake City',
    favoriteFood: 'Burritos',
    hobby: "walk"
  }
  
  const myObj = {
    weather: "cloudy",
    prefWeather: "sunny"
  }

  const thingsYouEnjoy = ['Mountain Biking', 'Javascript', 'Snowboarding', 'Rafting', 'Movies', 'Music']
  
  function tellUsAboutYourself(thing1, thing2, thing3) {
    this.name = yourObject.name,
    this.city = yourObject.city,
    thing1 = thingsYouEnjoy[0],
    thing2 = thingsYouEnjoy[3],
    thing3 = thingsYouEnjoy[1]
    this.favoriteFood = "bizkits",
    hobby = yourObject.hobby
    this.weather = myObj.weather,
    this.prefWeather = myObj.prefWeather
    console.log(`Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`);
    console.log(`Sometimes I like to ${this.hobby}.`);
    console.log(`Currently, it is ${this.weather} but I prefer when it is ${this.prefWeather}.`)
  }



tellUsAboutYourself();