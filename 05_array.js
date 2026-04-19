// Mutating array methods
// push, pop, shift, unshift, splice, reverse, sort, fill
const threeEmptyItems = Array(3);
console.log(threeEmptyItems);

const singlePassenger = Array.of(3);
console.log(singlePassenger);

const trainCode = Array.from("DUST");
console.log(trainCode);

const alphabets = ["a", "b", "c", "d", "e", "d", "e", "f"];
alphabets(2, 1);
console.log(alphabets);

const tempTrain = ["A", "B", "c", "D"];
console.log(tempTrain);
tempTrain.length = 3;
console.log(tempTrain);
tempTrain.length = 5;
console.log(tempTrain);

console.log(Array.isArray(tempTrain)); // to check if it is array

// Non- mutating array methods
// concat, slice, join, toString, at

const cars = [
  "BMW",
  "Audi",
  "Mercedes",
  "Lexus",
  ["Porsche", "Ferrari", ["Bugatti", "Lamborghini"]],
];
console.log(cars.concat("Porsche", "Ferrari"));
console.log(cars);
console.log(cars.slice(1, 3));
console.log(cars.join("|"));
console.log(cars.toString());
console.log(cars.at(2)); //
console.log(cars.lastIndexOf("BMW"));
console.log(cars.flat(1)); // flattens the array and the input given is depth
