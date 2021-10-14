console.log('App Connected.')

// TODO

// Create console on front end
// Create our spaceship class with attributes name, hull, firepower, accuracy

class Spaceship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
}

// Create alien spaceship class with randomly generated hull, firepower, accuracy

class AlienShip extends Ship {
    constructor(name) {
        let hull = Math.floor(Math.random() * 4) + 3;
        let firepower = Math.floor(Math.random() * 3) + 2;
        let accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
        super(name, hull, firepower, accuracy);
    }
}

// Create start prompt on screen, with button to accept or decline
// Generate alien spaceship attack, options to attack it or retreat
// Generate alien spaceship retaliation
// On screen prompt for hit/miss + damage done
// On screen health bar for our and enemy ship