class Calculator {
    constructor(demo) {
        this.demo = demo
    }

    hello() {
        console.log(this.demo)
    }

    // TODO: make a water method
    waterCalculator(days, numOfPeople = 0) {
        // 3.7 L per person per day
        let outputDays = 3.7 * numOfPeople
        let result = outputDays * days
        console.log(result)
        return result
    }

    // TODO: make a food method
    foodCalculator(days, foodByCalorie, numOfPeople = 0) {
        // 2,000 calories per day per person

    }
}

const newCaluculator = new Calculator("demo")
newCaluculator.waterCalculator(100, 2)

export default Calculator
