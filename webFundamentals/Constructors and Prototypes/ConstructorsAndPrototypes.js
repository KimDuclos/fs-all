// console.log("CONSTRUCTOR FUNCTION");
// function Person(poopAttributes) {
//   this.age = poopAttributes.age;
//   this.name = poopAttributes.name;
//   this.homeTown = poopAttributes.homeTown;
// //   this.speak = () => {
// //     return `Hello, my name is ${this.name}. I'm ${this.age} years old. I'm from ${this.homeTown}.`;  // removed to be used below
// //   };
// }

// const BoomBoom = new Person({
//   age: 12,
//   name: "BoomBoom",
//   homeTown: "someTown",
// });

// console.log(BoomBoom); // returns new Person object

// // console.log(BoomBoom.speak()); // returns the speak function from the Person object - full sentence with attributes filled in for BoomBoom

// console.log("OJECT PROTOTYPE");

// function Person2(poopAttributes2) {
//   this.age2 = poopAttributes2.age2;
//   this.name2 = poopAttributes2.name2;
//   this.homeTown2 = poopAttributes2.homeTown2;
// }

// Person2.prototype.speak2 = function () {
//   // add method to the function object outside of the object
//   return `Hooty hoo I'm ${this.name2}.`; // speak will not be on the Person2 object, but instead on the _proto_ in the console
// };

// const BoomBoom2 = new Person2({
//   // new Person2 object
//   age2: 14,
//   name2: "BoomBoom2",
//   homeTown2: "someTown2",
// });

// console.log(BoomBoom2); // will print
// console.log(BoomBoom2.speak2());

// console.log("INHERITANCE");

// function Child(childAttributes) {
//   Person2.call(this, childAttributes); // binds to Person2 object
//   this.isChild = childAttributes.isChild; // new attribute to the child object
// }

// Child.prototype = Object.create(Person2.prototype); // creates new child object based on original Person2 object

// const buddy = new Child({
//   // create new child
//   age2: 3,
//   name2: "Buddy",
//   homeTown2: "newHomeTown",
// });

// console.log(buddy.speak2()); // Takes from Person2 object

////////////////////////////////////////

console.log("PROTOTYPES");


function Fruit(attrs) {
    this.type = attrs.type;
    this.name = attrs.name;
    this.isRipe = attrs.isRipe;
    this.calories = attrs.calories;
  }
  
  Fruit.prototype.shipped = function(destination) {
    console.log(`Shipping ${this.name} to ${destination}`);
  };
  
  Fruit.prototype.calculateCals = function() {
    console.log(`Calories in ${this.name} are ${this.calories * 200}`);
  };
  
  function Banana(bananaAttrs) {
    Fruit.call(this, bananaAttrs);
    this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt;
  }
  
  Banana.prototype = Object.create(Fruit.prototype);
  
  Banana.prototype.checkIfMonkeysLikeIt = function() {
    if(this.doMonkeysLikeIt) {
      return true;
    } else {
      return false;
    }
  };
  
  function Kiwi(kiwiAttrs) {
    Fruit.call(this, kiwiAttrs);
    this.isFuzzy = kiwiAttrs.isFuzzy;
  }
  
  Kiwi.prototype = Object.create(Fruit.prototype);
  
  Kiwi.prototype.checkIfFuzzy = function() {
     if(this.isFuzzy) {
      return true;
    } else {
      return false;
    }
  }
  
  const newBanana = new Banana({
    doMonkeysLikeIt: true,
    type: 'Tree',
    name: 'Banana',
    isRipe: false,
    calories: 0.1
  });
  
  const newKiwi = new Kiwi({
    isFuzzy: true,
    type: 'Tree',
    name: 'Kiwi',
    isRipe: false,
    calories: 0.7
  });
  
  console.log(newBanana.shipped('Alaska'));
  console.log(newKiwi.shipped('Colorado'));
  console.log(newBanana.checkIfMonkeysLikeIt());
  console.log(newKiwi.checkIfFuzzy());
  console.log(newBanana.calculateCals());
  console.log(newKiwi.calculateCals());
  