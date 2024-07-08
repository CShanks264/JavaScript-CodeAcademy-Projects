//Creating a const variable to ref later
const myAge = 21
//Creating a variable for the early dog years and multiplying
const earlyYears = 2 * 10.5
//Creating a variable for the later dog years and multiplying
let laterYears = (myAge - 2) * 4
//totalling the dog years
const myAgeInDogYears = earlyYears + laterYears
//Creating a variable for my name in lowercase
const myName = 'CShanks'.toLowerCase()
//printing to terminal
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`)

//extra practice
//Creating a variable for my brothers name
const brotherName = 'KJShanks'.toUpperCase()
//Creating a variable for my brothers age
const brotherAge = 32 //damn imagine being old
//getting the later dog years for brothers age
laterYears = (brotherAge - 2) * 4
//totalling brothers age in dog years
const brotherAgeInDogYears = earlyYears + laterYears
//printing to terminal
console.log(`My brother's name is ${brotherName}. He is ${brotherAge} years old in human years which is ${brotherAgeInDogYears} in dog years!`)