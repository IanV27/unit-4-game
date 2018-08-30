$( document ).ready(function() {
    // Variables to generate a random number and Variables for Wins, Losses and Player Total
    var wins=0;
    var losses=0;
    var playerTotal=0;
    var random;
    var num1;
    var num2;
    var num3;
    var num4;
    $('#wins').text(wins);
    $('#losses').text(losses);

    //Game Resets
    function reset(){
        playerTotal=0;    
        random=Math.floor(Math.random()*120+19);
        console.log(random);
        $('#scoreToMatch').text(random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        console.log(num1,num2,num3,num4);
   
        $('#totalScore').text(playerTotal);
        } 

    // Use a conditional statement to check

        // if the user's total is the same as the random number then we need to alert user that they won and exit game
        function winner(){
            alert("Awesomeness!!!! You won!");
              wins++; 
              $('#wins').text(wins);
              reset();
        }
        // if the users total is greater than the random number then alert the user that they lost the game and exit
        function loser(){
            alert ("Bummer, You lose! Better luck next time!");
              losses++;
              $('#losses').text(losses);
              reset()
            }

    // Clicking crystals
  $('#red').on ('click', function(){
      console.log("num1",num1)
    playerTotal = playerTotal + num1;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
    //Win & lose conditions
        if (playerTotal == random){
          winner();
        }
        else if ( playerTotal > random){
          loser();
        }   
  })  
  $('#blue').on ('click', function(){
    console.log("num2",num2)
    playerTotal = playerTotal + num2;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal);
    //Win & lose conditions 
        if (playerTotal == random){
          winner();
        }
        else if ( playerTotal > random){
          loser();
        } 
  })  
  $('#yellow').on ('click', function(){
    console.log("num3",num3)
    playerTotal = playerTotal + num3;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal);
    //Win & lose conditions
          if (playerTotal == random){
          winner();
        }
        else if ( playerTotal > random){
          loser();
        } 
  })  
  $('#green').on ('click', function(){
    console.log("num4",num4)
    playerTotal = playerTotal + num4;
    console.log("New playerTotal= " + playerTotal);
    $('#totalScore').text(playerTotal); 
    //Win & lose conditions
          if (playerTotal == random){
          winner();
        }
        else if ( playerTotal > random){
          loser();
        }

    })

reset();
})
