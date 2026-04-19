const codename = "shadow fox";
const backupName = String("Night Owl");
const templateName = `Agent ${codename}`;

let intercepted = "Hello";
intercepted[0] = "J"; //silentFail
console.log(intercepted);

const secretCode = "Omega-7";
console.log(secretCode.length);
console.log(secretCode.charAt(99));
console.log(secretCode[99]);
console.log(secretCode.at(-1));

const message =
  "Hitesh sir the best Teacher, and I want to become his best student";
console.log(message.indexOf("sir"));

console.log(message.slice(0, 2));
console.log(message);

const orders = "move-north | hold position | extract vip";
const orderList = orders.split("|");
console.log("split", orderList);
console.log("SOS".split(""));
const myData = "SOS".split("");
console.log("myDataType", typeof myData);

console.log(void "Hitesh"); // void always evaluates its expression and return undefined
