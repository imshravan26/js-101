class Cricketer {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.matchesPlayed = 0;
    this.stamina = 100;
  }

  introduce() {
    return `${this.name} the ${this.role} | matches played ${this.matchesPlayed} | stamina ${this.stamina}`;
  }
}

const player1 = new Cricketer("Virat", "Batsman");
const player2 = new Cricketer("Bhumrah", "Bowler");

console.log(typeof Cricketer); // type of classes is function
console.log(player1.introduce());
console.log(player1.hasOwnProperty("name")); // check if the player1 has this property
console.log(typeof player1); // returns object
console.log(typeof player1.introduce()); // string return type of function as executing the function
console.log(typeof player1.introduce); // the type of introduce which is 'function'
console.log(player2.introduce());

class Debutant {
  constructor(name) {
    this.name = name;
    this.walkout = () => `${this.name} walks out to bat for the first time`; // isko this ka reference milege
  }
  standup() {
    return `testing ${this.name} for the this reference`; // isko this ka referemce nahi milega
  }
}

const debutant1 = new Debutant("Shubhman");
const debutant2 = new Debutant("Yashasvi");

const something = debutant1.walkout;
const somethingMore = debutant1.standup;

console.log(debutant1.walkout === debutant2.walkout);

console.log(something());
console.log(somethingMore());
