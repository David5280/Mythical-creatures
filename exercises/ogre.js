class Ogre {
  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter++;
    if (human.encounterCounter % 3 === 0 && human.encounterCounter > 0) {
      this.swingAt(human);
    }
    if (this.swings % 2) {
      human.knockedOut = true;
    }
  }
  swingAt(human) {
      this.swings++;
  }
  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;