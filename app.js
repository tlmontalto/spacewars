// TODO

// Create console on front end
// Create our spaceship class with attributes name, hull, firepower, accuracy

const shipInfo = document.querySelector('.ship_information')
const alienInfo = document.querySelector('.alien_information')
const startButton = document.querySelector('#start_button')
const attackSeqence = document.querySelector('.attack_sequence')

class Spaceship {
    constructor(name, hull, firepower, accuracy) {
        this.name = name;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }

    attack(other) {
        attackSeqence.append(this.name + ' attacks ' + other.name + '!');
        if (Math.random() < this.accuracy) {
            attackSeqence.append(this.name + ' hits!');
            other.hull -= this.firepower;
        } else {
            attackSeqence.append(this.name + ' misses!');
        }
    }
}

// Create alien spaceship class with randomly generated hull, firepower, accuracy

class AlienShip extends Spaceship {
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

// creating hero ship
const heroShip = new Spaceship('heroShip Montalev', 20, 5, 0.7);
shipInfo.append(heroShip.name)

// creatin aliens 
const aliens = [];
for (let i = 0; i < 6; i++) {
    aliens.push(new AlienShip('Alien ' + i));
    alienInfo.append(aliens[i].name)
}

// starting batlle between ships
let aliensDefeated = 0;
for (let i = 0; i < aliens.length; i++) {
    // Do battle with the alien
    let alien = aliens[i];
    while (heroShip.hull > 0 && alien.hull > 0) {
        heroShip.attack(alien);
        if (alien.hull > 0) {
            alien.attack(heroShip);
        }
    }
}