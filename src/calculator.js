class Calculator {
    constructor(days=0, numAdults=0, numChildren=0, numPets=0) {
        this.days = days;
        this.numAdults = numAdults;
        this.numChildren = numChildren;
        this.numPets = numPets;
    }

    waterCalculatorAdult(days, numAdults = 0) { 
        let outputDays = (3.7 * numAdults)
        let result = outputDays * days 
        return result
    }

    waterCalculatorChild(days, numChildren = 0) { 
        let outputDays = (2.0 * numChildren)
        let result = outputDays * days 
        return result 
    }

    waterCalculatorPet(days, numPets = 0) { 
        let outputDays = (1.28 * numPets)
        let result = outputDays * days
        return result
    }

    waterCalculatorMaster(days, numAdults = 0, numChildren = 0, numPets = 0) {
        // 3.7 L per person per day
        let outputDays = (3.7 * numAdults) + (2.0 * numChildren) + (1.28 * numPets)
        let result = outputDays * days
        console.log(result)
        return result
    }
        
    foodCalculatorAdult(days, numAdults = 0) { 
        let outputDays = (2000 * numAdults)
        let result = outputDays * days 
        return result 
    }

    foodCalculatorChild(days, numChildren = 0) { 
        let outputDays = (1400 * numChildren)
        let result = outputDays * days 
        return result
    }

    foodCalculatorPets(days, numPets = 0) { 
        let outputDays = (400 * numPets)
        let result = outputDays * days 
        return result 
    }

    //2,000kcal/person/day based on standard health consultation for recommended daily consumption for average adults.
    foodCalculatorMaster(days, numAdults = 0, numChildren = 0, numPets = 0) {
        // 2,000 calories per day per person
        let outputDays = (2000 * numAdults) + (1400 * numChildren) + (400 * numPets)
        let result = outputDays * days 
        console.log(result)
        return result
    }

    nutritionCalculator(days, numAdults = 0, numChildren = 0, numPets = 0) { 
        const totalCalories = this.foodCalculatorMaster(days, numAdults, numChildren, numPets)
        let protein = (totalCalories * 0.30)
        let carbs = (totalCalories * 0.42)
        let fats = (totalCalories * 0.28)
        let NutResult = [protein, carbs, fats]
        return NutResult
    }
}

export default Calculator

const newCaluculator = new Calculator(1, 1, 1, 1)
newCaluculator.waterCalculatorMaster(100, 1, 1, 1)
newCaluculator.foodCalculatorMaster(1, 1, 1, 1)

let NutTest = newCaluculator.nutritionCalculator(1, 1, 1, 1)

console.log(`protein ${NutTest[0]}`)
console.log(`carbs ${NutTest[1]}`)
console.log(`fats ${NutTest[2]}`)