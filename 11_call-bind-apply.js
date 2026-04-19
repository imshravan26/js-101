// call and apply => basic chef (kitchen)
// bind => return a new function

function cookDish(ingredient, style) {
  return `${this.name} prepares ${ingredient} in ${style} style`;
}

const Sharmakitchen = { name: "Sharma jis Kitchen" };
const guptaKitchen = { name: "Gupta jis Kitchen" };

console.log(cookDish.call(Sharmakitchen, "paneer and spices", "muglai"));
const guptaOrder = ["Chole Kulche", "Punjabu Dhaba"];

console.log(cookDish.apply(guptaKitchen, guptaOrder));

function reportDelivery(location, status) {
  return `${this.name} prepares at ${location}: ${status}`;
}

const deliveryBoy = { name: "Ranveer" };

console.log("call: ", reportDelivery.call(deliveryBoy, "Lyari", "Ordered"));
console.log("Apply: ", reportDelivery.apply(deliveryBoy, ["Mars", "Pickup"]));
console.log("Bind: ", reportDelivery.bind(deliveryBoy, "Haridwar", "What"));

const bindReport = reportDelivery.bind(deliveryBoy);
console.log(bindReport("Haridwar", "what"));


