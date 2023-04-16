//Random number generator

//Max number

const userMaxNumber = parseFloat(prompt("Enter the maximum number that can be generated: "));

//Random number generator formula

const randomNumber = Math.floor(Math.random() * userMaxNumber);

//Displaying the random number

console.log(randomNumber);
