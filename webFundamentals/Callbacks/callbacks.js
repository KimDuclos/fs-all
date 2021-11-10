// can store a function as a variable and pass that function variable around to other functions
// also can be passed as an argument (parameter)



// const functionFeeder = function(callback) {
//     callback("Hello from inside the Function Feeder");
// }

// functionFeeder(function(greeting) {
//     console.log(greeting);
// });

function sayHello(name) {  // has name parameter, that can be named anything
    console.log(`Hello, ${name}`) // name parameter will be used here
}
function callSayHelloWithLars(poopCallback) { // callback parameter can be named anything, was callback, now poop to show that.
    const poopName = "Lars";  // will fill name in SayHello function
    poopCallback(poopName);  // can be named anything, was innerName but now poopName to show that
}

callSayHelloWithLars(sayHello); // invoking sayHello within CallSayHelloWithLars while adding "Lars" as {name} in SayHello

const elements = []