let raceNumber = Math.floor(Math.random() * 1000);
//Creating a variable that indicates whether a runner is early
let isEarly = true
//Creating age variable
let runnerAge = 18
//Checks if runner is and adult & is early
if (runnerAge > 18 && isEarly === true){
  raceNumber += 1000
  console.log(`Your race will begin at 9:30am and your race number is ${raceNumber}!`)
} else if (runnerAge > 18){
  //checks if runner is an adult
  console.log(`Your race will begin at 11:00am and your race number is ${raceNumber}!`)
} else if (runnerAge < 18){
  //check if runner is youth runner (<18)
  console.log(`Your race will begin at 12:30pm and your race number is ${raceNumber}!`)
} else {
  //pretty much only 18yo and any other issue
  console.log('There was an issue. Please see the registration desk.')
}