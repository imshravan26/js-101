const heroine = {
  name: "Shravani",
  class: "S-Class",
  level: 100,
  health: Infinity,
  mana: 200,
  isAlive: true,
};

console.log(heroine);
delete heroine.level;
console.log(heroine);

const hero = {
  name: "Shravan the lover",
  agility: "100",
  stealth: undefined,
};

console.log("name" in hero);
console.log("stealth" in hero);
console.log("toString" in hero);
console.log(hero.hasOwnProperty("toString"));

const hero2 = { ...hero }; // shallow copy
console.log(hero2);

hero2.agility = "120";
console.log(hero2);

const hero3 = structuredClone(heroine); // copying the object
console.log(hero3);
