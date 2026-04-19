const myBaby = {
  name: "Shravani",
  era: "Eternity",
  value: Infinity,
  material: "Love",
};

const keys = Object.keys(myBaby);
const values = Object.values(myBaby);
const entries = Object.entries(myBaby);

console.log(keys); // array
console.log(values); // array
console.log(entries); // array of array

// forof loop
for (const [key, value] of Object.entries(myBaby)) {
  console.log(`${key} : ${value}`);
}

const sunderrrr = [
  ["name", "Shravani"],
  ["age", 20],
  ["how", "awesome"],
];

const sunder = Object.fromEntries(sunderrrr);
console.log(sunder);

const specialCase = {
  artifact: "Shravani",
  location: "My Heart",
  locked: true,
};

Object.freeze(specialCase); // freeze make the object immutable
delete specialCase.locked;
specialCase.newProperty = "test";
console.log(specialCase);

const LadyLuck = {
  name: "Shravani",
  luck: Infinity,
};

Object.seal(LadyLuck); // use seal method is used when u want to allow edit to existing property
console.log(LadyLuck);
LadyLuck.name = "Shravani the most beautiful";
console.log(LadyLuck);

const secret = { name: "I love Shravani" };

Object.defineProperty(secret, "catelogId", {
  // god mode for defining properties in object
  value: "SEC-999",
  writable: false, // can we write
  enumerable: false, // can we iterate
  configurable: false, // can we delete
});

console.log(secret);

secret.catelogId = "Hacked"; // cannot be done (fails silently)
console.log(secret);

for (const [key, value] of Object.entries(secret)) {
  console.log(`${key}:  ${value}`);
}

const dec = Object.getOwnPropertyDescriptor(secret, "catelogId");
console.log(dec);

// loop key points

// 1. for() => Fastest and most optimized loop
// 2. while() => when u don't know the number of iterations
// 3. do..while() => gaurantee will run once
// 4. for...in => mostly on objects avoid using on array
// 5. for..of
// 6. foreach, map, reduce, filter, every and many more
