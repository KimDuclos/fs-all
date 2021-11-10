class Parent {
    constructor(name) {
        this.name = name;
        this.birthPlace = birthPlace;
        this.eyeColor = eyeColor;
        this.hairColor = this.hairColor;
    }
    speak() {
        console.log(`Name: ${this.name}`)
    }
}

class Child extends Parent {
    constructor(name) {
        super();
    }
    
}