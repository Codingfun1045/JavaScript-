let scoreData = localStorage.getItem('score');
    let score = scoreData ? JSON.parse(scoreData) : {
      Wins: 0,
      Losses: 0,
      Tie: 0
    };

    updateScore();
    

    function updateScore(){
      document.querySelector('.js-paragraph')
      .innerHTML=`Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Tie}`
    }


    // let score=(JSON.parse(localStorage.getItem('score')))  || 
    //     {
    //     Wins:0,
    //     Losses:0,
    //     Tie:0
    //     };

    // if(!score){
    //   score={
    //     Wins:0,
    //     Losses:0,
    //     Tie:0
    //   }
    // };
    
    function computerChoice(){
    randomNumber=Math.random();
    let computerMove='';
    
    if(randomNumber>=0 && randomNumber<1/3){
      computerMove='Rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3){
      computerMove='Paper';
    }
    else if(randomNumber>=2/3 && randomNumber<1){
      computerMove='Scissors';
    }

    return computerMove;
    
  }
  
  function compareMoves(playerMove){
    let result='';
    const computerMove=computerChoice();

    if(playerMove==='Rock'){
      if(computerMove==='Scissors'){
        result='You Win';
        // alert('You picked Rock. Computer picked Scissors. You Win.')
      }
      else if(computerMove==='Paper'){
        result='You Lose';
        // alert('You picked Rock. Computer picked Paper. You lose.')
      }
      else if(computerMove==='Rock'){
        result='Tie';
        // alert('You picked Rock. Computer picked Rock. Tie.')
      }
    }
    
    else if(playerMove==='Paper'){
      
      if(computerMove==='Rock'){
        result='You Win';
        // alert('You picked Paper. Computer picked Rock. You Win.')
      }
      else if(computerMove==='Scissors'){
        result='You Lose';
        // alert('You picked Paper. Computer picked Scissors. You lose.')
      }
      else if(computerMove==='Paper'){
        result='Tie'
        // alert('You picked Paper. Computer picked Paper. Tie.')
      }
    }
    
    else if(playerMove==='Scissors'){
      
      if(computerMove==='Paper'){
        result='You Win';
        // alert('You picked Scissors. Computer picked Paper. You Win.')
      }
    else if(computerMove==='Rock'){
      result='You Lose';
      // alert('You picked Scissors. Computer picked Rock. You lose.')
    }
    else if(computerMove==='Scissors'){
      result='Tie';
      // alert('You picked Scissors. Computer picked Scissors. Tie.')
    }
  }
  
  if(result==='You Win'){
    score.Wins+=1;
  }
  else if(result==='You Lose'){
    score.Losses+=1;
  }
  else if(result==='Tie'){
    score.Tie+=1;
  }

  document.querySelector('.js-result').innerHTML=result;

  document.querySelector('.js-compare').innerHTML=`You 
  <img src="images/${playerMove}-emoji.png" class="move-icon" >
  <img src="images/${computerMove}-emoji.png" class="move-icon" > Computer`;
  
  localStorage.setItem('score',JSON.stringify(score));
  
  updateScore();
  

//     alert(`You picker ${playerMove}. Computer picked ${computerMove}.${result}.
// Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Tie}.`)

  }