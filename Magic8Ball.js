let userName = ''
//Ternary statement for greating the user (with and without name)
userName ? console.log(`Hello ${userName}`) : console.log('Hello!')
//Question to ask the Magic8ball
let userQuestion = 'Ya like cheese?'
console.log(userQuestion)
//getting a random number
let randomNumber = Math.floor(Math.random()*8)
//a var that will hold 8ball response
let eightBall = ''
//How Codeacademy expected me to do the switch statement
switch (randomNumber){
  case 0: eightBall = 'It is certain'
  break;
  case 1: eightBall = 'It is decidedly so'
  break;
  case 2: eightBall = 'Reply hazy try again'
  break;
  case 3: eightBall = 'Cannot predict now'
  break;
  case 4: eightBall = 'Do not count on it'
  break;
  case 5: eightBall = 'My sources say no'
  break;
  case 6: eightBall = 'Outlook not so good'
  break;
  case 7: eightBall = 'Signs point to yes'
  break;
  default: eightBall = 'EightBall broke.'
  break;
}
/* alt using if else statments
if (randomNumber === 0){
  eightBall = 'It is certain'
}else if (randomNumber === 1){
  eightBall = 'It is decidedly so'
}else if (randomNumber === 2){
  eightBall = 'Reply hazy try again'
}else if (randomNumber === 3){
  eightBall = 'Cannot predict now'
}else if (randomNumber === 4){
  eightBall = 'Do not count on it'
}else if (randomNumber === 5){
  eightBall = 'My sources say no'
}else if (randomNumber === 6){
  eightBall = 'Outlook not so good'
}else if (randomNumber === 7){
  eightBall = 'Signs point to yes'
}else{
  eightBall = 'EightBall broke.'
}*/
console.log(eightBall)

/* How I originally did the switch statement
switch (randomNumber){
  case 0: console.log('It is certain')
  break;

  case 1: console.log('It is decidedly so')
  break;

  case 2: console.log('Reply hazy try again')
  break;

  case 3: console.log('Cannot predict now')
  break;

  case 4: console.log('Do not count on it')
  break;

  case 5: console.log('My sources say no')
  break;

  case 6: console.log('Outlook no so good')
  break;

  case 7: console.log('Signs point to yes')
  break;

  default: console.log('The Magic Eightball broke')
  break;
}*/