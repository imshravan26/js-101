const { promise, reject } = require("bcrypt/promises");

function prepareOrderCB(dish, cb) {
    setTimeout(() => cb(null, {dish, status: "Prepared"}), 100);
}
function pickupOrderCB(order, cb) {
    setTimeout(() => cb(null, {...order, status: "pickuped up"}), 100);
}
function deliverOrderCB(order, cb) {
    setTimeout(() => cb(null, {...order, status: "delivered"}), 100);
}

prepareOrderCB("biryani", (err, order) => {
    if (err) return console.log(err);
    pickupOrderCB(order, (err, order) => {
        if (err) return console.log(err);
        deliverOrderCB(order, (err, order) => {
            if (err) return console.log(err);
            console.log(`${order.dish}: ${order.status}`)
        })
    })
})

// this was before promises was introduced
// promises have 3 states 1. fulfiled 2. pending 3. rejected

function prepareOrder (dish) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!dish) {
                reject(new Error("No dish is there"))
                return
            }
            console.log(`${dish} is ready`)
            resolve({dish, status: "prepared"})
        }, 100)
    })
}



