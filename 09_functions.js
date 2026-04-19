console.log(brewPotion("love potion", 100));

function brewPotion(ingredient, dose) {
  return `Brewing Potion with ${ingredient} (x${dose}) ... potion ready`;
}

const mixElixir = function (ingredient) {
  return `mixing elixir with ${ingredient}`;
};

// no own 'this', no 'arguments' object
const distilEssence = (ingredient) => {
  return `mixing elixir with ${ingredient}`;
};

function oldBrewinglogs() {
  console.log("Type: ", typeof arguments); // Argument passed in function are object
  console.log("is Array: ", Array.isArray(arguments));
  const argsArr = Array.from(arguments);
  console.log(argsArr);
}

oldBrewinglogs("Shravani", "Shravan");

// const arrowbrew = () => {
//   try {
//     console.log(arguments);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// arrowbrew("sage");

console.log("program completed");

// impure function as it changes the data from the global scope
let globalCount = 0;

function brewAndCount() {
  globalCount++;
}
brewAndCount();
console.log(globalCount);
// Pure functions are those who doesn't interfere with the global scoped data

// IIFE immediately invoked functional expression
(() => {
  console.log("hello this is iffe");
})();
(function () {
  console.log("This is also iffe");
})();
const potionShop = (function () {
  console.log("This is Potion Shop");
})();

console.log(typeof potionShop);

// HOF => Higher order function
// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.
function anotherFunctionForClass(brewAndCount) {
  return function newBar() {
    // do somehting
  };
}

const harryPotter = (function () {
  let inventory = 0;

  return {
    brew() {
      inventory++;
      return `Brew potion ${inventory}`;
    },
    getStock() {
      return inventory;
    },
  };
})();
console.log(harryPotter);
console.log(harryPotter.brew());
console.log(harryPotter.inventory); // will understand this is closures
// Basically function carries a bag with it but in IIFE the bag is not allowed
// returns undefined
