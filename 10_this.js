console.log(this);

function ranveerOnGlobalStage() {
  return typeof this;
}

console.log(ranveerOnGlobalStage());

function ranveerWithNoScript() {
  "use strict";
  return this;
}

console.log(ranveerWithNoScript());

const bollywoodFilm = {
  name: "Muuthirao Mastani",
  lead: "Ranveer",

  introduce() {
    return `${this.lead} performs in ${this.name}`;
  },
};

console.log(bollywoodFilm.introduce());

const filmDirector = {
  name: "Sanjay leela Bhansali",
  cast: ["Ranveer", "Deepika", "Priyanka"],

  announceCast() {
    this.cast.forEach((actor) => {
      console.log(`${this.name} introduces ${actor}`);
    });
  },
};

filmDirector.announceCast();

const filmSet = {
  crew: "Spot Boys",
  prepareProps() {
    console.log(`Outer this.crew: ${this.crew}`);
    function arrangeChairs() {
      console.log(`Inner this.crew: ${this.crew}`);
    }
    arrangeChairs(); // nested functions does not have this access

    const arrangeLights = () => {
      console.log(`Arrow this.crew: ${this.crew}`);
    };
    arrangeLights();
  },
};

filmSet.prepareProps();

// Detached Methods

const actor = {
  name: "Ranveer",
  bow() {
    return `${this.name} takes a bow`;
  },
};

const detachedBow = actor.bow;
console.log(detachedBow());