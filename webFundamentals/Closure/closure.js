// const foo = "bar";

// const returnFoo = () => {
//     return console.log(foo);
// }
// returnFoo();

// const lastName = "Bond";

// const greet = () => {
//     const firstName = "James";
//     return console.log(`The name's ${lastName}, ${firstName} ${lastName}`);
// }

// greet();

const counter = () => {

    // Return a function that when invoked increments and returns a counter variable.
    // Example: const newCounter = counter();
    // newCounter(); // 1
    // newCounter(); // 2
    let count = 0;
    return function() { // creates closure for variable and updated value of variable.
        return ++count;
    }
};
const newCounter = counter(); // keeps track of count value in memory
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
console.log(counter());  // will return only an anonymous function, not the value stored in it.

let numSum;
const sum = (num1, num2) => {
    return num1 + num2;
}

console.log(sum(2, 4));

// const mainFunction = () => {
//     const func1 
// }


myName = 'Dan';
function sayMyName(myName){
  return `Hello, my name is ${myName}`
}

console.log(sayMyName(myName));

const mainFunction = () => {
    const func1 = () => {
        let var1 = "one";
        return var1
    };
    const funct2 = () => {
        let var2 = "two";
        return var2;
    };
    return func1() + " " + " " + funct2();
}

console.log(mainFunction());