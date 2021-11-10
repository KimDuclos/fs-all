class Animal {
    constructor(name) {
      this.name = name;
    }
    speak() {
      console.log(`${this.name} says, Hello!`);
    }
  }

  class Dog extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(`${this.name} barks!`);
    }
  }


  class Cat extends Animal {
    constructor(name) {
      super(name);
    }
  
    speak() {
      console.log(`${this.name} Meows!`);
    }
  }


const bowWow = new Dog('Grizzly');
const kitty = new Cat('Fluffertons');

console.log(bowWow); // output name: "Grizzly"
console.log(kitty); // output name: "Fluffertons"
bowWow.speak();
kitty.speak();