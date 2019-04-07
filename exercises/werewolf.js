// class Werewolf {
//   constructor(name, location) {
//     this.name = name;
//     this.location = location;
//     this.human = true;
//     this.wolf = false;
//     this.hungry = false;
//   }
//   change() {
//     this.human = !this.human;
//     this.wolf = !this.wolf;
//     this.hungry = !this.hungry;
//   }
//   eat(victim) {
//     if (this.wolf === false) {
//       victim.alive = true;
//     } else {
//       victim.alive = false;
//     }
//   }
// }


class Werewolf {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change() {
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
  }
  eat(victim) {
    if (this.human === true) {
      return
    }
    victim.alive = false;
    this.human = !this.human;

  }
}































module.exports = Werewolf;