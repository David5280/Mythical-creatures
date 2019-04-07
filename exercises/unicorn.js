class Unicorn {
  constructor(name, color) {
    this.name = name;
    this.color = color || 'white';
  }
  isWhite() {
    return false;
  }
  says(w) {
  return `**;* ${w} *;**`; 
    }
};

module.exports = Unicorn;















































