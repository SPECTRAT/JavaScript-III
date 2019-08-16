/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  console.log("----------------------- PROTOTYPES-------------------------------------")
/*
  === GameObject ===
  
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attr){
  this.createdAt = attr.createdAt;
  this.name = attr.name;
  this.dimensions = attr.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game!`;
};

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(stats){
  this.healthPoints = stats.healthPoints;
  GameObject.call(this, stats);
}
CharacterStats.prototype = Object.create(GameObject.prototype);
CharacterStats.prototype.takeDamage = function(num) {
  return `${this.name} took ${num} damange.`;
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 function Humanoid(humanoidAttr) {
   this.team = humanoidAttr.team;
   this.weapons = humanoidAttr.weapons;
   this.language = humanoidAttr.language;
   CharacterStats.call(this, humanoidAttr);
 }
 Humanoid.prototype = Object.create(CharacterStats.prototype);
 Humanoid.prototype.greet = function(){
   return `${this.name} offers a greeting in ${this.language}.`;
 }
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage(5)); // Bruce took 5 damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
  console.log("---------------------------------------STRETCH--------------------------------------------");

  function Hero(heroAttr) {
    Humanoid.call(this, heroAttr);
    this.megaMove = heroAttr.megaMove;
  }
  Hero.prototype = Object.create(Humanoid.prototype);
  Hero.prototype.battleCry = function(){
    return `${this.name} give a mighty battle cry in ${this.language}!`;
  }
  Hero.prototype.clobber = function(weapon, opponent) {
    return `${this.name} used  ${weapon} to clobber ${opponent}.`
  };
  Hero.prototype.mega = function(megaMove, opponent) {
    return `${this.name} used ${megaMove} on ${opponent}!`
  };
  Hero.prototype.healing = function(){
    return `${this.name} healed themselves for 10 HP.`
  }


  function Villain(villainAttr) {
    Humanoid.call(this, villainAttr);  
    this.megaMove = villainAttr.megaMove;
  }
  Villain.prototype = Object.create(Humanoid.prototype);
  Villain.prototype.battleCry = function() {
    return `${this.name} gives an monsterous battle cry in ${this.language}!`;
  }
  Villain.prototype.smash = function(weapon, opponent) {
    return `${this.name} used  ${weapon} to smash ${opponent}.`
  };
  Hero.prototype.mega = function(megaMove, opponent) {
    return `${this.name} used ${megaMove} on ${opponent}!`
  };

  let superNan = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 6,
    },
    healthPoints: 25,
    name: 'Super Nanny',
    team: 'Better Behavior Brigade',
    weapons: [
      'Book of Discipline',
      'Time Out Token'
    ],
    language: `The Queen's English`,
    megaMove : "A Firm Talking To"
  });

  const terrTwo = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 0.5,
      width: 1,
      height: 1,
    },
    healthPoints: 30,
    name: 'Terrible Two Timmy',
    team: 'No-Nappers',
    weapons: [
      'Death Rattle',
      'Sonic Tantrum Blast',
      'Binky Boomerang'
    ],
    language: 'Baby Talk',
    megaMove: 'Turbo Tantrum'
  });

  console.log(terrTwo.battleCry());
  console.log("...");
  console.log(superNan.battleCry());
  console.log("...");
  console.log(superNan.clobber(superNan.weapons[0], terrTwo.name));
  console.log(terrTwo.takeDamage(10));
  console.log("...");
  console.log(terrTwo.smash(terrTwo.weapons[1], superNan.name));
  console.log(superNan.takeDamage(10));
  console.log("...");
  console.log(superNan.clobber(superNan.weapons[1], terrTwo.name));
  console.log(terrTwo.takeDamage(10));
  console.log("...");
  console.log(terrTwo.smash(terrTwo.weapons[0], superNan.name));
  console.log(superNan.takeDamage(7));
  console.log("...");
  console.log(superNan.healing());
  console.log("...");
  console.log(terrTwo.smash(terrTwo.weapons[0], superNan.name));
  console.log(superNan.takeDamage(10));
  console.log("...");
  console.log(superNan.mega(superNan.megaMove));
  console.log(terrTwo.takeDamage(15));
  console.log(terrTwo.destroy());
  