// console.log("Swastik");

const { reject } = require("bcrypt/promises");

// Promise.resolve("resolved value").then((v) => {
//   console.log("microtask", v);
// });

// console.log("Happy Birthday");

function boilWater(ms) {
  return new Promise((res, rej) => {
    console.log("Krte hai ji boil water");
    if (typeof ms !== "number" || ms <= 0) {
      rej(new Error("ms must be number greater than 0"));
      return;
    }
    setTimeout(() => {
      res("Ubal gya");
    }, ms);
  });
}

function grindLeaves(time) {
  return new Promise((res) => {
    setTimeout(() => console.log("Steeped Tea"), time);
  });
}

function addSugar(spoons) {
  return `Added ${spoons} sugar`;
}

boilWater(200)
  .then((msg) => {
    console.log("Resolved: ", msg);
  })
  .then(console.log(addSugar(3)))
  .catch((err) => console.log("Rejected: ", err.message));
