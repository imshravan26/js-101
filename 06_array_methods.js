const orders = [
  { dish: "Pasta", price: 10, spicy: false, qty: 2 },
  { dish: "Pizza", price: 15, spicy: true, qty: 1 },
  { dish: "Salad", price: 8, spicy: false, qty: 3 },
  { dish: "Curry", price: 12, spicy: true, qty: 2 },
  { dish: "Burger", price: 11, spicy: false, qty: 1 },
];

const myData = orders.forEach((order, index) => {
  console.log(` # ${index + 1} : ${order.qty}x ${order.dish}  `);
});

// foreach() expect a synchronous function || it does not wait for promises
// There is no way stop or break a foreach loop

// forEach dosen't return anything by default
console.log(myData);

const recieptLines = orders.map((o) => `${o.dish}: ${o.price * o.qty} dollar `);
console.log(recieptLines); // Map by default return an Array

// Filter
const spicyOrders = orders.filter((o) => o.spicy);
console.log(spicyOrders);

// Reduce
const totalRevenue = orders.reduce(
  (sum, order) => (sum = sum + order.qty * order.price),
  0,
);

console.log(totalRevenue);

const grouped = orders.reduce(
  (acc, order) => {
    const category = order.spicy ? "spicy" : "mild";
    acc[category].push(order.dish);
    return acc;
  },
  { spicy: [], mild: [] },
);

console.log(grouped);

// gotchas
const ticketNumbers = [100, 25, 3, 42, 8];
const sorted = [...ticketNumbers].sort();
console.log(sorted); // this dosen't work because the sort function sorts on the basis of string
const sortedW = [...ticketNumbers].sort((a, b) => a - b); // use this instead to sort properly
console.log(sortedW);

const kitchenOrders = [
  { dish: "Pasta", price: 10, spicy: false, qty: 2 },
  { dish: "Pizza", price: 15, spicy: true, qty: 1 },
  { dish: "Salad", price: 8, spicy: false, qty: 3 },
  { dish: "Curry", price: 12, spicy: true, qty: 2 },
  { dish: "Burger", price: 11, spicy: false, qty: 1 },
];

const mildReport = kitchenOrders
  .filter((order) => !order.spicy)
  .map((order) => ({
    dish: order.dish,
    total: order.price * order.qty,
  }))
  .toSorted();

console.log(mildReport);
