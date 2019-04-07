class Fairy {
  constructor(name, dust, obj) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    }
    this.disposition = 'Good natured';
    this.humanWards = [];
    this.counter = 0;
  }
  receiveBelief() {
    this.dust++;
  }
  believe() {
    this.dust+=10;
  }
  makeDresses(dress) {
    this.clothes.dresses = this.clothes.dresses.concat(dress);
  }
  provoke() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(infants) {
    if (this.disposition === 'Vengeful') {
      this.counter++;
      infants.disposition = 'Malicious'
      this.humanWards.push(infants);
    } else {
      return infants;
    }
    if (this.counter >= 3) {
      this.disposition = 'Good natured'
    }
  }
}


module.exports = Fairy;