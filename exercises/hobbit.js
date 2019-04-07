class Hobbit {
  constructor(name, disposition, age) {
    this.name = name;
    this.disposition = disposition || 'homebody';
    this.age = age || 0;
    this.isShort = true;
    this.adult = false;
    this.old = false;
    if (this.name === 'Frodo') {
    this.hasRing = true;
  } else {
    this.hasRing = false;
  }
} 
      celebrateBirthday() {
    this.age++; 
    if (this.age > 32) {
    this.adult = true
  }
    if (this.age > 100) {
      this.old = true;
    }
  } 
}

module.exports = Hobbit;






















































