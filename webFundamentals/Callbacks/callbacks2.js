const sayDogName = (dName) => {
    console.log(`My dog's name: ${dName}`)
}

const dogName = (dogCallback) => {
    const dogName = "Max";
    dogCallback(dogName);
}

dogName(sayDogName);


const tellTemperature = (temperature) => {
    console.log(`The temperature is: ${temperature}`);
}

const tempFunction = (callbackTemp) => {
    const temp = "56";
    callbackTemp(temp);
}

tempFunction(tellTemperature);