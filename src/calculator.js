class Calculator {
    constructor(demo) {
        this.demo = demo
    }

    hello() {
        console.log(this.demo)
    }

    // TODO: make a water method
    waterCalculator(numOfPeople = 0, waterByLiter) {
        // 3.7 L per person per day
        let outputDays = 3.7 * numOfPeople
        let result = outputDays * days
        console.log(result)
        return result
    }

    // TODO: make a food method
    foodCalculator(days, foodByCalorie, numOfPeople = 0) {
        // 2,000 calories per day per person
        let foodByCalorie = 2000
        let outputDays = foodByCalorie * numOfPeople
        let result = outputDays * days 
        console.log(result)
        return result
    }
}

const newCaluculator = new Calculator("demo")
newCaluculator.waterCalculator(100, 2)
newCaluculator.foodCalculator(1, 1, 1)

export default Calculator

console.log("change")
console.log("hello")