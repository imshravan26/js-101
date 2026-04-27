// pending, done(fulfilled, resolve), nope(reject, nako)

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Chaicode");
    reject(new Error("chaicode"));
  }, 2000);
});
console.log(promise);
// setTimeout(() => {console.log(promise)}, 3000)

promise.then(console.log, console.log);
promise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  },
);
promise.then(console.log).catch(console.log);
promise
  .then((data) => {
    const newdata = data;
    return newdata;
  })
  .then((data) => {
    return data + ".com"
  })
  .then((data) => {
    console.log(data);
    return data
  })
  .catch((err) => {
    console.log(err);
    return "Shravani";
  }).then(console.log)
