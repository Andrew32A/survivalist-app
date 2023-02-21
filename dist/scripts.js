import Calculator from "../src/calculator.js"

// output ids
const adultOutput = document.getElementById("adultOutput");
const childrenOutput = document.getElementById("childrenOutput");
const petsOutput = document.getElementById("petsOutput");

// TODO: add use for these fields somewhere else
const fullNameInput = document.getElementById("fullNameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");

document.addEventListener("keyup", (e) => {
    // retrieve inputs
    const numAdultsInput = document.getElementById("numAdultsInput").value;
    const numChildrenInput = document.getElementById("numChildrenInput").value;
    const numPetsInput = document.getElementById("numPetsInput").value;
    const days = document.getElementById("numDaysInput").value;

    // instantiate calculator object with new inputs
    const calculatorObject = new Calculator(days, numAdultsInput, numChildrenInput, numPetsInput)

    // calculate food
    const foodAdultOutput = calculatorObject.foodCalculatorAdult(days, numAdultsInput)
    const foodChildrenOutput = calculatorObject.foodCalculatorChild(days, numChildrenInput)
    const foodPetsOutput = calculatorObject.foodCalculatorPets(days, numPetsInput)

    // TODO: calculate water

    // output food
    adultOutput.innerHTML = foodAdultOutput;
    childrenOutput.innerHTML = foodChildrenOutput;
    petsOutput.innerHTML = foodPetsOutput;

    // TODO: output water
});
