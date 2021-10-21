// Create console on front end
// Create our spaceship class with attributes name, hull, firepower, accuracy
// TODO Skip lines after each response

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

// Start game, change USS Schwarzenegger to ${heroShip}, change prompt answers to .toLowerCase
function startGame() {
    alienShip.length = 0;
    makeHeroShip()
    makeAlienShip()
    beginGamePlay()
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
    fillAlienStats()
}

function beginGamePlay() {
    attackButton.classList.remove('hidden')
    retreatButton.classList.remove('hidden')
    startButton.classList.add('hidden')
}

const play = () => {
    attackSeqence.append("Do you want to attack the alien spaceship?")
}

const destroyedShip = () => {
    attackSeqence.append(alienShip[0].name + ' went kabloo-ey!');
    alienShip.shift();
    gameEnd()
    console.log(alienShip)
}

function fillAlienStats() {
    const alienStats = `${alienShip[0].name}
    hull: ${alienShip[0].hull}
    firepower: ${alienShip[0].firepower}
    accuracy: ${alienShip[0].accuracy}`
    alienInfo.append(alienStats)
}

// starting batlle between ships

function battle() {
    let alien = alienShip[0];
    if (heroShip.hull > 0 && alien.hull > 0) {
        heroShip.attack(alien);
        if (alienShip[0].hull <= 0) {
            destroyedShip()
            alienInfo.innerText = ""
            fillAlienStats()
        }
        else if (alien.hull > 0) {
            alien.attack(heroShip);
        }
    }
    // gameEnd()
}

const gameEnd = () => {
    if (alienShip.length <= 0) {
    alert("Congratulations! You've saved the day!");
    clearGamePlay()
    } else if (heroShip.hull <= 0) {
    alert("They've blown a hole clear through the hull Captain, we must retreat to fight another day.");
    clearGamePlay()
    } else {
        return;
    }
}

function clearGamePlay() {
    attackSeqence.innerText = ""
    shipInfo.innerText = ""
    alienInfo.innerText = ""
    startButton.classList.remove('hidden')
    attackButton.classList.add('hidden')
    retreatButton.classList.add('hidden')
}

function retreat() {
    attackSeqence.append("What are you so afraid of?")
}