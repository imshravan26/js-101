function bootNavigation(mapLoaded) {
    try {
        console.log(`Is Navigation Loaded:  ${mapLoaded}`)
        if (!mapLoaded) {
            throw new Error("kal aana!")
        }
        return `NAV OK`
    }
    catch (error) {
        console.log(error);
        console.log(`Navigation Failed: ${error.message}`);
    }
    finally {
        console.log("Navigation sequence completed ");
        
    }   
}

const status1 = bootNavigation(true)
const status2 = bootNavigation()

console.log(`Result:  ${status1}`);
console.log(`Result:  ${status2}`);
