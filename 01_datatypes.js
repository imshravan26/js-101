let curseStatus = null;
console.log(curseStatus);
console.log(typeof curseStatus);

let weatherApiResponse = null;
console.log(typeof weatherApiResponse);

const uniqueRuneId = Symbol("rune_of _fire");
console.log(
  "Rune: ",
  uniqueRuneId.toString(),
  " | type of: ",
  typeof uniqueRuneId,
);

const heroStats = {
  name: "Deepak",
  level: 12,
  class: "Ranger",
};

console.log("Hero: ", heroStats, " | type: ", typeof heroStats);

// Non primitive data types => returns type of object
const inventory = ["FLame sword", "Health potion", "sheild"];
console.log("Inventory ", inventory, " | type: ", typeof inventory);

function castSpell() {
  return "Fireball";
}

console.log("Spell Type ", typeof castSpell);

console.log(typeof "chaicode");
console.log(typeof 42);
console.log(typeof 42n);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol());
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});

let originalHP = 100;
let cloneHP = originalHP;

cloneHP = 80;

console.log("originalHP: ", originalHP);
console.log("cloneHP: ", cloneHP);

const orignialSword = {
  name: "Flame Sword",
  damage: 75,
  typeOfW: "Fire",
};

const cloneSword = orignialSword; // Not the Correct way to copy the object
cloneSword.damage = 100;

console.log("original sword: ", orignialSword);
console.log("clone sword: ", cloneSword);

const armorOriginal = {
  name: "Iron Plate",
  defence: 80,
  buff: {
    fire: 10,
  },
};

const cloneArmor = { ...armorOriginal }; // right way to copy the object (creates a copy of the object)
cloneArmor.buff.fire = 90; // when nested object it will again cause error

const potionOriginal = { name: "Health", effect: { heal: 40, mana: 30 } };
const potionCopy = structuredClone(potionOriginal); // proper way to copy the whole structure of the object

potionCopy.effect.mana = 60;

console.log("potion original: ", potionOriginal);
console.log("potion copy: ", potionCopy);

typeof null === "object";
Array.isArray();
