import Calculator from "../src/calculator.js"

// input ids
const numAdultsInput = document.getElementById("numAdultsInput");
const numChildrenInput = document.getElementById("numChildrenInput");
const numPetsInput = document.getElementById("numPetsInput");

// output ids
const testOutput = document.getElementById("testOutput")

// TODO: add use for these fields somewhere else
const fullNameInput = document.getElementById("fullNameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");

// TODO: add days input field and tie in here
const days = 1

const calculatorObject = new Calculator(1, numAdultsInput, numChildrenInput, numPetsInput)
const foodAdultOutput = calculatorObject.foodCalculatorAdult(1, numAdultsInput)

testOutput.innerHTML = foodAdultOutput
