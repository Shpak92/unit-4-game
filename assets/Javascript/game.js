$( document ).ready(function(){
  // Appending the random to the Number to guess
 var random = Math.floor(Math.random() *120+30)
  $ ('#number-to-guess').text(random);

 //Appending the random number to id's in the HTML
      choice1 = Math.floor(Math.random() * 10 +1 )
      choice2 = Math.floor(Math.random() * 10 +1 )
      choice3 = Math.floor(Math.random() * 10 +1 )
      choice4 = Math.floor(Math.random() * 10 +1 )

  var wins = 0;
  var lose =0;
  var score =0;
 
  //Declaring wins and losses for tallies
  $('#totalWins').text("Wins: " +wins);
  $('#totalLosses').text("Losses: " + lose);

  //Reseting the game
  function reset() {
      random = Math.floor(Math.random() *120+30)
      console.log(random)
      $('#number-to-guess').text(random);
      choice1 = Math.floor(Math.random() * 10 + 1 )
      choice2 = Math.floor(Math.random() * 10 + 1 )
      choice3 = Math.floor(Math.random() * 10 + 1 )
      choice4 = Math.floor(Math.random() * 10 + 1 )
      score = 0;
      $('#totalScore').text("Your Total Score: " + score);
  }
  //Win function
  function win (){
  alert("Winner!"); 
  wins ++;
  $('#totalWins').text(wins);
  reset();
  }

  //Loser function
  function loser (){
      alert("Loser!"); 
      lose ++;
      $('#totalLosses').text(lose);
      reset();
      }
  //Clicks for the cartoons
  //Ren
  $('#ren').on ('click', function(){
      score = score + choice1;
      console.log("New score = " + score);
      $('#totalScore').text(score); 
            //sets win/lose conditions
          if (score == random){
            win();
          }
          else if ( score >= random){
            loser();
            
          
          }  
      })
  //Thornberrys
  $('#thornberrys').on ('click', function(){
      score = score + choice2;
      console.log("New score = " + score);
      $('#totalScore').text(score); 
            //sets win/lose conditions
          if (score == random){
            win();
          }
          else if ( score >= random){
            loser();
          
          }
      })
  //catdog
  $('#catdog').on ('click', function(){
      score = score + choice3;
      console.log("New score = " + score);
      $('#totalScore').text(score); 
            //sets win/lose conditions
          if (score == random){
            win();
          }
          else if ( score >= random){
            loser();

          }
      })
  //rugrats
  $('#rugrats').on ('click', function(){
      score = score + choice4;
      console.log("New score = " + score);
      $('#totalScore').text(score); 
            //sets win/lose conditions
          if (score == random){
            win();
          }
          else if ( score >= random){
            loser();
          } 
          
      });
  });
