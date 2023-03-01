import Calculator from "../src/calculator.js"

// output ids
const foodAdultOutput = document.getElementById("foodAdultOutput");
const foodChildrenOutput = document.getElementById("foodChildrenOutput");
const foodPetsOutput = document.getElementById("foodPetsOutput");

const waterAdultOutput = document.getElementById("waterAdultOutput");
const waterChildrenOutput = document.getElementById("waterChildrenOutput");
const waterPetsOutput = document.getElementById("waterPetsOutput");

const foodTotal = document.getElementById("foodTotal");
const waterTotal = document.getElementById("waterTotal");

const proteinTotal = document.getElementById("proteinTotal");
const fatTotal = document.getElementById("fatTotal");
const carbTotal = document.getElementById("carbTotal");

// TODO: add use for these fields somewhere else
const fullNameInput = document.getElementById("fullNameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");

document.addEventListener("keyup", (e) => {
    // retrieve inputs
    const days = document.getElementById("numDaysInput").value;
    const numAdultsInput = document.getElementById("numAdultsInput").value;
    const numChildrenInput = document.getElementById("numChildrenInput").value;
    const numPetsInput = document.getElementById("numPetsInput").value;

    // instantiate calculator object with new inputs
    const calculatorObject = new Calculator(days, numAdultsInput, numChildrenInput, numPetsInput)

    // calculate food
    const foodAdultCalculated = calculatorObject.foodCalculatorAdult(days, numAdultsInput)
    const foodChildrenCalculated = calculatorObject.foodCalculatorChild(days, numChildrenInput)
    const foodPetsCalculated = calculatorObject.foodCalculatorPets(days, numPetsInput)

    // calculate water
    const waterAdultCalculated = calculatorObject.waterCalculatorAdult(days, numAdultsInput)
    const waterChildrenCalculated = calculatorObject.waterCalculatorChild(days, numChildrenInput)
    const waterPetsCalculated = calculatorObject.waterCalculatorPet(days, numPetsInput)

    // calculate total
    const foodTotalCalculated = calculatorObject.foodCalculatorMaster(days, numAdultsInput, numChildrenInput, numPetsInput)
    const waterTotalCalculated = calculatorObject.waterCalculatorMaster(days, numAdultsInput, numChildrenInput, numPetsInput)
    const proteinTotalCalculated = calculatorObject.nutritionCalculator(days, numAdultsInput, numChildrenInput, numPetsInput)
    const fatTotalCalculated = calculatorObject.nutritionCalculator(days, numAdultsInput, numChildrenInput, numPetsInput)
    const carbTotalCalculated = calculatorObject.nutritionCalculator(days, numAdultsInput, numChildrenInput, numPetsInput)

    // output food
    foodAdultOutput.innerHTML = foodAdultCalculated + " Calories";
    foodChildrenOutput.innerHTML = foodChildrenCalculated + " Calories";
    foodPetsOutput.innerHTML = foodPetsCalculated + " Calories";

    // output water
    waterAdultOutput.innerHTML = waterAdultCalculated + " L";
    waterChildrenOutput.innerHTML = waterChildrenCalculated + " L";
    waterPetsOutput.innerHTML = waterPetsCalculated + " L";

    // output total
    foodTotal.innerHTML = Math.floor(foodTotalCalculated) + " Calories";
    waterTotal.innerHTML = Math.floor(waterTotalCalculated) + " L";
    proteinTotal.innerHTML = Math.floor(proteinTotalCalculated[0]) + " Calories";
    fatTotal.innerHTML = Math.floor(fatTotalCalculated[1]) + " Calories";
    carbTotal.innerHTML = Math.floor(carbTotalCalculated[2]) + " Calories";
});
