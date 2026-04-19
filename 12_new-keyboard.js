// In javascript everything is an object
function TataCar(ChasisNumber, modelName) {

    { } 
    this.ChasisNumber = ChasisNumber;
    this.modelName = modelName;
    this.fuelLevel = 100;
}


TataCar.prototype.status = function() {
    return `Tata  ${this.modelName} # ${this.ChasisNumber} | Fuel: ${this.fuelLevel}`
}

const car1 = new TataCar("MH-101", "Nexon") // Here the reference is taken from the instance be it fuction / class
const car2 = new TataCar("DL-102", "Harrier")


console.log(car1.status());
console.log(car2.status());


// this is not same as above

function createAutorickshaw (id, route) {
    return {
        id,
        route,
        run () {
            return `Auto ${this.id} running on ${this.route}`
        }
    }
}

const auto1 = createAutorickshaw("UP-01", "Amravati"); // here the whole method is passing to the new object
const auto2 = createAutorickshaw("UP-02", "Nagpur")

console.log(auto1.run());
console.log(auto2.run());

