const turant = Promise.resolve("Done"); // immediate promise resolve sort of turant hone wali cheez
console.log(turant);

const anyPromise = Promise.any([
  Promise.resolve("Chai"),
  Promise.resolve("code"),
  Promise.reject("Error"),
]);

anyPromise.then(console.log);

const allPromise = Promise.all([
  Promise.resolve("Chai"),
  Promise.resolve("code"),
  Promise.reject("Error"),
]);
allPromise.then(console.log).catch(console.log);

const allSettledPromise = Promise.allSettled([
  Promise.resolve("Chai"),
  Promise.resolve("code"),
  // Promise.reject("Error"),
]);

allSettledPromise.then(console.log).catch(console.log);


const hPromise = new Promise((res, rej) => {
    setTimeout(() => {
        rej(new Error("Masterji"));
    }, 3000)
})


async function nice() {
    try {
        const result = await hPromise;
        console.log(result);
    } catch (error) {
        console.log("Error aagaya ji", error.message)
    }
}

nice()