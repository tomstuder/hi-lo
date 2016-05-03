// Variables

    var score = 0;
    var totalScore = score;
    var lives = 6;
    var livesLeft = lives;



// Random Number Generator
    var randomNumber = Math.floor((Math.random() * 20) + 1);

// Button Hi
  function hi() {
     if (randomNumber > 10) {
        document.getElementById("modal-win").className = "display";
        // Add Points
        totalScore = score+=100;
        document.getElementById("points").innerHTML = score;
  } else {
    document.getElementById("modal-lose").className = "display";
     livesLeft = lives--;
    document.getElementById("lives").innerHTML = livesLeft;
  }
}


// Button Low

function low() {
   if (randomNumber < 10) {
      document.getElementById("modal-win").className = "display";
      // Add Points
      totalScore = score+=100;
      document.getElementById("points").innerHTML = score;
    } else {
    document.getElementById("modal-lose").className = "display";
      livesLeft = lives--;
    document.getElementById("lives").innerHTML = livesLeft;
  }
}

document.getElementById("lives").innerHTML = livesLeft;
document.getElementById("points").innerHTML = score;

// Testing
    console.log(randomNumber);
    console.log("hello world");

