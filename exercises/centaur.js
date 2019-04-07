// class Centaur {
//   constructor(name, breed) {
//     this.name = name;
//     this.breed = breed;
//     this.cranky = false;
//     this.standing = true;
//     this.layingDown = false;
//     this.count = 0;
//   }
//   shoot() {
//     this.count++;
//     if (this.count >= 3) {
//     this.cranky = true;
//     return 'NO!';
//   } else {
//     this.cranky = false;
//     return 'Twang!!!';
//     }
//   }
//   run() {
//     this.count++;
//     if (this.count >= 3) {
//     this.cranky = true;
//     return 'NO!';
//   } else {
//     this.cranky = false;
//     return 'Clop clop clop clop!!!';
//     }
//   }
//   sleep() {
//     if (this.standing === true) {
//       return 'NO!';
//     } 
//   }
//   layDown() {
//     this.layingDown = !this.layingDown;
//     this.standing = !this.standing;
//   }
//   standUp() {
//     this.layingDown = !this.layingDown;
//     this.standing = !this.standing;
//   }
// }




class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.counter = 0;
  } 
  shoot() {
    this.checkCranky();
    if (this.cranky === true) {
      return 'NO!';
    } else {
    return 'Twang!!!';
    }
  }
  run() {
    this.checkCranky();
    if (this.cranky === true) {
      return 'NO!';
    } else {
    return 'Clop clop clop clop!!!';
    }
  }
  checkCranky() {
    this.counter++;
    if (this.counter >= 3 || this.layingDown === true) {
      this.cranky = true;
      return 'NO!';
    }
  }
  sleep() {
    if (this.standing === true) {
      return 'NO!';
    } else {
      this.cranky = false;
      this.counter = 0;
      return 'ZZZZ';
    }
  }
  layDown() {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
  }
  standUp() {
    this.standing = !this.standing;
    this.layingDown = !this.layingDown;
  }
  drinkPotion() {
    if (this.standing === true) {
      this.cranky = !this.cranky;
    } else {
      return 'Not while I\'m laying down!';
    }
  }
}


















module.exports = Centaur;