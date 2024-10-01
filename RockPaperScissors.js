//Function that gets "User" input
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput
    } else if (userInput === 'bomb') {
      return userInput
    } else {
      console.log('User input was neither rock, paper, or scissors')
    }
  }

  //Function that get computer input from random number
  //For some reason codeacademy thought i should use a if/else or switch statement to return computer choice...
  // const getComputerChoice = () => {
  //   const computerChoice = ['rock', 'paper', 'scissors']
  //   const randomNum = Math.floor(Math.random() * 3)
  //   return computerChoice[randomNum]
  // }

  //Note the only benefit i see from using a switch or if/else statement here is returning error text
  const getComputerChoice = () => {
    const randomNum = Math.floor(Math.random() * 3)
    switch (randomNum) {
      case 0:
        return 'rock'
        break
      case 1:
        return 'paper'
        break
      case 2:
        return 'scissors'
        break
      default:
        return 'RANDOM NUMBER ERROR!'
    }
  }
  
  //Function that finds a winner based on what the user and computer choose
  const determineWinner = (userChoice , computerChoice) => {
    if (userChoice === computerChoice){
      return 'tie'
    }
    if (userChoice === 'bomb'){
      return 'User blew up the computer and wins by default?!?'
    }
    if (userChoice === 'rock'){
      if (computerChoice === 'scissors'){
        return 'User wins!'
      } else {
        return 'Computer wins!'
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'rock'){
        return 'User wins!'
      } else {
        return 'Computer wins!'
      }
    }
    if (userChoice === 'scissors'){
      if (computerChoice === 'paper'){
        return 'User wins!'
      } else {
        return 'Computer wins!'
      }
    }
  }
  
  //Function that plays the game
  const playGame = () => {
    userChoice = getUserChoice('bomb')
    console.log(userChoice)
  
    computerChoice = getComputerChoice()
    console.log(computerChoice)
  
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame()