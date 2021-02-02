class Person {
    constructor(name, softwareEngineer) {
        this.arms = 2;
        this.legs = 2;
        this.name = name;
        this.softwareEngineer = softwareEngineer;
        this.artists = []
    }
    // this is a method on this class
    greet() {
        console.log(`Hello SEI-111`);
    }
    // this is a walk method we created 
    walk() {
        console.log('Walking along the beach')
    }
    // method with a parameter
    eat(food) {
        console.log(`Today, I am eating ${food}`)
    }
    // method working with arrays
    addArtist(artist) {
        console.log(`I like ${artist}`);
        this.artists.push(artist)
    }
}

// this is an instance of a class
// known as an object
// IMPORTANT: add the new keyword to create a new instance
const princeLeo = new Person('Leo', true);

// print attributes
console.log(princeLeo.name);
console.log(princeLeo.softwareEngineer);

// calling the methods(invoke)
princeLeo.walk();
princeLeo.eat('Dinosaur Chicken Nuggets');
// adding a method on an instance 
princeLeo.jump = () => {
    console.log('Yipeee')
}

princeLeo.jump();
princeLeo.addArtist('Rico Nasty');
princeLeo.addArtist(`Yeye`);
// view an attribute
console.log(princeLeo.artists)

const archieLoo = new Person ('Archie', true);
archieLoo.game = () => {
    console.log('You stink');
    console.log('i like fortnite i like fornite');
}

archieLoo.addArtist('Demon Slayer OP 1');
archieLoo.addArtist('Cash Carti')

console.log(archieLoo.game)
console.log(archieLoo.artists)

const ronTheKid = new Person ('Ron', true);
ronTheKid.addArtist('Pokemon OP 1')
console.log(ronTheKid.artists)

