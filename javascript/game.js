// array of choices for computer    
  var userGuess = document.getElementById("user-guess");
   var computerGuess = document.getElementById("computer-guess");

  var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  //variable tracking wins, losses, guesses left, and guesses so far...
   var wins = 0;
   var losses = 0;
   var guessesLeft = 12;
   var guessesSofar = [];
   var guesses;
   var left;
   var so;
   var far;


  //When user presses key, the following fuction will occur...

  document.onkeyup = function(event) {

      //Determines which key was pressed by user...
       userGuess.textContent = event.key;


      //sets computerGuess variable equal to a random choice from computerChoices Array...
       computerGuess.textContent = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      //if user presses any alpha key, game logic below begins...

          for (i=0; i>12; i++) {
            if (userGuess.textContent != computerGuess.textContent) {
                guessesLeft--;
                 losses=parseInt(losses)+1;
            }
            else if (userGuess.textContent === computerGuess.textContent) {
                wins++;
    
           }
            if (guessesLeft = 0) {
             
                
           }
        }



      var html = "<p>GUESS WHAT LETTER I'M THINKING OF</p>" +
         "<p>wins: " + wins + "</p>" +
         "<p>losses: " + losses + "</p>" +
         "<p>guessesLeft: " + guessesLeft + "</p>";

        document.querySelector("#game").innerHTML = html;
   };

