// TODO

// Create console on front end
// Create our spaceship class with attributes name, hull, firepower, accuracy

const shipInfo = document.querySelector('.ship_information')
const alienInfo = document.querySelector('.alien_information')
const startButton = document.querySelector('#start_button')
const attackSeqence = document.querySelector('.attack_sequence')
const attackButton = document.querySelector('#attack_button')
const retreatButton = document.querySelector('#retreat_button')
const commandButtons = document.querySelector('.command_buttons')

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
// const heroShip = new Spaceship('USS Montalev', 20, 5, 0.7);
// shipInfo.append(heroShip.name)

// // creatin aliens 
// const aliens = [];
// for (let i = 0; i < 6; i++) {
//     aliens.push(new AlienShip('Alien ' + i));
//     alienInfo.append(aliens[i].name)
// }

// // starting batlle between ships
// let aliensDefeated = 0;
// for (let i = 0; i < aliens.length; i++) {
//     // Do battle with the alien
//     let alien = aliens[i];
//     while (heroShip.hull > 0 && alien.hull > 0) {
//         heroShip.attack(alien);
//         if (alien.hull > 0) {
//             alien.attack(heroShip);
//         }
//     }

//         // End the game if the user lost the battle
//     if (heroShip.hull <= 0) {
//         attackSeqence.append(heroShip.name + ' went kabloo-ey!');
//         break;
//     }

//     // Otherwise, end the game if this was the last alien
//     attackSeqence.append(alien.name + ' went kabloo-ey!');
//     aliensDefeated++;
//     if (i == aliens.length - 1) {
//         break;
//     }

//     // create elements for both attack and retreat buttons
//     // append buttons to screen
//     // create onclick functionality for buttons
    
//     let action = null;
//     while (action == null) {
//         action = prompt('"attack" or "retreat"?');
//         // Keep prompting until the user types "action" or "retreat".
//         if (!(action == 'attack' || action == 'retreat')) {
//             action = null;
//         }
//     }
//     if (action == 'retreat') {
//         break;
//     }
// }

// if (heroShip.hull > 0) {
//     alert('Game over, you defeated ' + aliensDefeated + ' aliens!');
// } else {
//     alert('Game over, you lose.');
// }


// Start game, change USS Schwarzenegger to ${heroShip}, change prompt answers to .toLowerCase
function startGame() {
    alienShip.length = 0;
    makeHeroShip()
    makeAlienShip()
    attackButton.classList.remove('hidden')
    retreatButton.classList.remove('hidden')
    startButton.classList.add('hidden')
    play()
}

let heroShip
// creating hero ship
const makeHeroShip = () => {
    heroShip = new Spaceship('USS Montalev', 20, 5, 0.7);
    shipInfo.append(heroShip.name)
}

const alienShip = []

const makeAlienShip = () => {
    // let x = Math.random(Math.floor) * 5 + 3
    for (let i = 1; i <= 6; i++) {
        alienShip.push(new AlienShip('Alien ' + i));
    }
    console.log(alienShip);
}


// .toLowerCase
const play = () => {
    attackSeqence.append("Do you want to attack the alien spaceship?")
}


const evaluate = () => {
    gameEnd();
}

const destroyedShip = () => {
    attackSeqence.append(alienShip[0].name + ' went kabloo-ey!');
    alienShip.shift();
}

// starting batlle between ships

function battle() {
    // let aliensDefeated = 0;
    let alien = alienShip[0];
    if (heroShip.hull > 0 && alien.hull > 0) {
        heroShip.attack(alien);
        if (alienShip[0].hull <= 0) {
            destroyedShip()
        }
        else if (alien.hull > 0) {
            alien.attack(heroShip);
        }
    }
    evaluate()
}

const gameEnd = () => {
    if (alienShip.length <= 0) {
    alert("Congratulations! You've saved the day!");
    // startGame();
    clearText()
    startButton.classList.remove('hidden')
    attackButton.classList.add('hidden')
    retreatButton.classList.add('hidden')
    } else if (heroShip.hull <= 0) {
    alert("They've blown a hole clear through the hull Captain, we must retreat to fight another day.");
    // startGame();
    clearText()
    startButton.classList.remove('hidden')
    attackButton.classList.add('hidden')
    retreatButton.classList.add('hidden')
    } else {
        return;
    }
}

function toggleAttackButtons() {
    attackButton.classList.toggle('hidden')
    retreatButton.classList.toggle('hidden')
    startButton.classList.toggle('hidden')
}

function retreat() {
    attackSeqence.append("What are you so afraid of?")
}

function clearText() {
    attackSeqence.innerText = ""
    shipInfo.innerText = ""
    alienInfo.innerText = ""
}