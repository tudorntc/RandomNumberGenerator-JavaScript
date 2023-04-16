//Random number generator

//Max number

console.log("Enter the maximum number that can be generated.");
const userMaxNumber = parseFloat(prompt("This can also be a decimal number: "));

//Random number generator formula

const randomNumber = Math.floor(Math.random() * userMaxNumber);

//Displaying the random number

console.log(randomNumber);