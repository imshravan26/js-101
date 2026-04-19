const Prithviraj = {
  name: "Prithviraj",
  generation: "Grandfather",
  cookTraditionalDish() {
    return `${this.name} cooks an ancient family recipe`;
  },
};

const raj = Object.create(Prithviraj);
raj.name = "Raj";
raj.generation = "Father";
raj.runsFamilyBusiness = function () {
  return `${this.name} runs a family business`;
};
console.log(raj.runsFamilyBusiness());

const ranbir = Object.create(raj);
ranbir.name = "Ranbir";
ranbir.generation = "Son";
ranbir.makesFilm = function () {
  return `${this.name} makes blockbuster movies`;
};
console.log(ranbir.makesFilm());
console.log(ranbir.runsFamilyBusiness());
console.log(ranbir.cookTraditionalDish());

// this is inheritance the grandchild has all the access to the methods of the grandfather.
// In javascript everthing inherits object  => evernthing is an object in javascript.


Array.prototype.last = function () {
    return `${this[this.length - 1]} `
}

console.log([1, 2, 3, 4, 5, 6,].last());
console.log(["Shravan", "Shravani"].last());


Array.prototype.maptwo = function () {
    
}


