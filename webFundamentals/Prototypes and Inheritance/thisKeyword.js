// const sayName = (poopName) => {
//     console.log(this);
//     return poopName;
// }

// sayName("Cheezey Biz");

// const nameObject = {
//     greeting: "sup",
//     sayHello(poopName) {
//         console.log(`${this.greeting} my name is ${poopName}`);
//         console.log(this);
//     }
// };
// nameObject.sayHello("MeNameyName");

console.log(this);


// IMPLICIT BINDING WITH "THIS"
const meObject = {
    greeting: "Hello",
    speak() {
        console.log("implicit this = ", this);  // will output the full meObject - an implicit binding "this"
        return `${this.greeting}, world!`
    }
};

meObject.speak();

//CONSTRUCTOR FUNCTION 
function Person(objectPoop) {
    this.age = objectPoop.age;
    this.name = objectPoop.name;
    this.speak = () => {
        console.log(`This is the explicit binding`, this)
        console.log(`Hey, my name is ${this.name}, and I am ${this.age} years old.`);
    }
}

const herbert = new Person({name: "Herbie", age: "42"});
const bizkit = new Person({name: "bizkit", age: "12"});



herbert.speak();
bizkit.speak();