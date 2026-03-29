// let randomNumber = Math.random() * 3;
// if(randomNumber > 0 && randomNumber <=1 )
// {
//  let computerChoice = 'Bat';
//  console.log('Computer choice is Bat');
// }
// else if(randomNumber > 1 && randomNumber <= 2)
// {
//   let computerChoice = 'Ball';
//   console.log('Computer choice is Ball');
// }
// else
// {
//   let computerChoice = 'Stump';
//   console.log('Computer choice is Stump');
// }


function generateComputerChoice() {

  //This will generate random number between 0 and 3 
  let randomNumber = Math.random() * 3;
  
  let computerChoice;

  if(randomNumber > 0 && randomNumber <=1 )
  {
    return 'Bat';
  }

  else if(randomNumber > 1 && randomNumber <= 2)
  {
     return 'Ball';
  }

  else
  {
    return 'Stump';
  }
  return computerChoice;
}

function getResult(userMove, computerMove)
{
  // let resultMsg;

  if(userMove === 'Bat')
  {
    if(computerMove === 'Ball')
    {
      return 'User has Won';
    }

    else if(computerMove ===)
  }

  if(userMove === computerMove)
  {
    return `it's a tie`;
  }

  else if(computerMove === 'Bat' && userMove === 'Ball')
  {
    return 'Computer has won';
  }

  else if(computerChoice === 'Stump')
  {
    resultMsg = 'Computer has won';
  }
}



