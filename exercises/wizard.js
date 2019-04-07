class Wizard {
  constructor(obj) {
    this.name = obj.name;
    this.bearded = obj.bearded;
    if (obj.bearded === undefined) {
      this.bearded = true;
    }
    else {
      this.bearded = false;
    }
    this.isRested = true;
    this.counter = 0;
  }
    incantation (caps) {
      return caps.toUpperCase();
  }
    cast() {
      this.counter++;
      if (this.counter >= 3) {
        this.isRested = false;
        return 'I SHALL NOT CAST!';
      }
      return 'MAGIC BULLET';
    }
}

module.exports = Wizard; 