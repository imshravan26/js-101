const aadhar_of_mayur = Symbol("aadhar");
const aadhar_of_piyush = Symbol("aadhar");

console.log(typeof aadhar_of_mayur);
console.log(aadhar_of_mayur);
console.log(aadhar_of_mayur.toString());
console.log(aadhar_of_mayur.description);
console.log(aadhar_of_mayur === aadhar_of_piyush);

const nonIndian = Symbol();
console.log(nonIndian.description);

const biometricHash = Symbol("biometricHash");
const bloodgroup = Symbol("bloodgroup");

const citizenRecord = {
  name: "Ved Pandey",
  age: 21,
  [biometricHash]: "hash123",
  [bloodgroup]: "O+",
};

console.log(Object.keys(citizenRecord)); // only enumerable properties are returned
console.log(Object.getOwnPropertySymbols(citizenRecord)); // only enumerable properties are returned

const rtiQueryBook = {
  queries: ["Infra budget", "Ration Card", "Education budget", "Startup laws"],
  [Symbol.iterator]() {
    let index = 0;
    const queries = this.queries;
    return {
      next() {
        if (index < queries.length) {
          return { value: queries[index++], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};
// Object ko iterable bana diya

for (const query of rtiQueryBook) {
  console.log(`Filing the RTI: ${query}`);
}

const governmentScheme = {
  name: "Pm kisan Yogana",
  people: 54,
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return 69;
    if (hint === "string") return 88;
  },
};

console.log(+governmentScheme);
console.log(`${governmentScheme}`);
