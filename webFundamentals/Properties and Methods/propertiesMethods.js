const greatWhiteShark = {
    myKingdom: "Anamalia",
    myPhylum: "Chordata",
    myClass: "Chondrichthyes",
    myOrder: "Lamniformes",
    myFamily: "Lamnidae",
    myGenus: "Charcharodon",
    mySpecies: "charcharias",
    conservationStatus: "vulnerable",
    getScientificName() {
        scientiticName = this.myGenus + "-" + this.mySpecies
        return(scientiticName);
    }
}


console.log(greatWhiteShark.getScientificName());


// for in loop

const user = {
    username: 'dan.frehner',
    password: 'abc123',
    lovesJavascript: true,
    favoriteNumber: 42,
};

for (let key in user){
    console.log(key);
    console.log(user[key]);
}