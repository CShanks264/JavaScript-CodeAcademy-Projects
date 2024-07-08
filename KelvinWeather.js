//Declaring the Todays kelvin temp.
const kelvin = 0

//getting the temp in celsius based off todays kelvin temp
let celsius = kelvin - 273
console.log(`The temperature is ${celsius} degrees Celsius.`)

//getting the temp in fahrenheit based off of celsius
//added Math floor to round down fahrenheit
let fahrenheit = Math.floor(celsius * (9/5) + 32)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)

//getting the temp in newton based off celsius & rounding down
let newton = Math.floor(celsius * (33/100))
console.log(`the temperature is ${newton} degrees Newton.`)