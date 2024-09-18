class Character {
    constructor(name, level) {
        if (this.constructor === Character) {
            throw new Error("Cannot instantiate abstract class Character");
        }
        this.name = name;
        this.level = level;
    }


    attack() {
        throw new Error("Abstract method 'attack' must be implemented");
    }


    levelUp() {
        this.level += 1;
        console.log(`${this.name} leveled up to level ${this.level}!`);
    }
}


class Warrior extends Character {
    constructor(name, level) {
        super(name, level);
    }


    attack() {
        console.log(`${this.name} swings a sword with a mighty strike!`);
    }
}


class Mage extends Character {
    constructor(name, level) {
        super(name, level);
    }


    attack() {
        console.log(`${this.name} casts a Healing Wind!`);
    }
}


const cloud = new Warrior('Cloud', 50);
const aerith = new Mage('Aerith', 45);
const sephiroth = new Warrior('Sephiroth', 60);


cloud.attack(); // Omnislash!
aerith.attack(); // Healing Wind!
sephiroth.attack(); // Octaslash!


cloud.levelUp();
sephiroth.levelUp();
aerith.levelUp(); 
