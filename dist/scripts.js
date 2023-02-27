import Calculator from "../src/calculator.js"

// output ids
const foodAdultOutput = document.getElementById("foodAdultOutput");
const foodChildrenOutput = document.getElementById("foodChildrenOutput");
const foodPetsOutput = document.getElementById("foodPetsOutput");

const waterAdultOutput = document.getElementById("waterAdultOutput");
const waterChildrenOutput = document.getElementById("waterChildrenOutput");
const waterPetsOutput = document.getElementById("waterPetsOutput");

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

    // output food
    foodAdultOutput.innerHTML = foodAdultCalculated;
    foodChildrenOutput.innerHTML = foodChildrenCalculated;
    foodPetsOutput.innerHTML = foodPetsCalculated;

    // output water
    waterAdultOutput.innerHTML = waterAdultCalculated + " L";
    waterChildrenOutput.innerHTML = waterChildrenCalculated + " L";
    waterPetsOutput.innerHTML = waterPetsCalculated + " L";
});
