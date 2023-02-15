class Calculator {
    constructor(demo) {
        this.demo = demo
    }

    hello() {
        console.log(this.demo)
    }

    // TODO: make a water method
    //3.7L/person/day based on federal regulations and emergency preparedness recommendations.
    waterCalculator(days, numAdults = 0, numChildren = 0, numPets = 0) {
        // 3.7 L per person per day
        let outputDays = (3.7 * numAdults) + (2.0 * numChildren) + (1.3 * numPets)
        let result = outputDays * days
        console.log(result)
        return result
    }

    // TODO: make a food method
    //2,000kcal/person/day based on standard health consultation for recommended daily consumption for average adults.
    //Child logic to be added later.
    foodCalculator(days, numAdults = 0, numChildren = 0, numPets = 0) {
        // 2,000 calories per day per person
        let outputDays = (2000 * numAdults) + (1400 * numChildren) + (400 * numPets)
        let result = outputDays * days 
        console.log(result)
        return result
    }
}

const newCaluculator = new Calculator("demo")
newCaluculator.waterCalculator(100, 2)
newCaluculator.foodCalculator(1, 1)

export default Calculator

console.log("change")
console.log("hello")