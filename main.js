// We'll create an object for the player and the computer.
const player = {
  currentChoice: null,
};
const computer = {
  currentChoice: null,
};

// The choices can go into an array.
const choices = ["Lapis", "Papyrus", "Scalpellus"];
let winmsg = "The result of the winner is...";

// Then, we'll update the currentChoice property of the computer object with its choice. We get its choice by accessing the choices array at the randomIndex we generated.
function computerChooses() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  computer.currentChoice = choices[randomIndex];
}

document.getElementById("choice1").addEventListener("click", setChoice1);
document.getElementById("choice2").addEventListener("click", setChoice2);
document.getElementById("choice3").addEventListener("click", setChoice3);
document.getElementById("submit").addEventListener("click", compareChoices);

function setChoice1() {
  player.currentChoice = document.getElementById("choice1").innerText;
}
function setChoice2() {
  player.currentChoice = document.getElementById("choice2").innerText;
}
function setChoice3() {
  player.currentChoice = document.getElementById("choice3").innerText;
}

function compareChoices() {
  computerChooses();
  if (player.currentChoice === null || computer.currentChoice === null) {
    alert("Must choose an answer!");
  } else if (computer.currentChoice === player.currentChoice) {
    winmsg =
      "Its a tie!. Computer chose: " +
      computer.currentChoice +
      " and Player also chose: " +
      player.currentChoice;
  } else if (computer.currentChoice === choices[0]) {
    if (player.currentChoice === choices[1]) {
      winmsg =
        "Player wins! The player chose " +
        player.currentChoice +
        " while computer chose: " +
        computer.currentChoice;
    } else {
      winmsg =
        "The computer wins! The computer chose " +
        computer.currentChoice +
        " while player chose: " +
        player.currentChoice;
    }
  } else if (computer.currentChoice === choices[1]) {
    if (player.currentChoice === choices[2]) {
      winmsg =
        "Player wins! The player chose " +
        player.currentChoice +
        " while computer chose: " +
        computer.currentChoice;
    } else {
      winmsg =
        "The computer wins! The computer chose " +
        computer.currentChoice +
        " while player chose: " +
        player.currentChoice;
    }
  } else if (computer.currentChoice === choices[2]) {
    if (player.currentChoice === choices[0]) {
      winmsg =
        "Player wins! The player chose " +
        player.currentChoice +
        " while computer chose: " +
        computer.currentChoice;
    } else {
      winmsg =
        "The computer wins! The computer chose " +
        computer.currentChoice +
        " while player chose: " +
        player.currentChoice;
    }
  }
  var x = document.getElementsByClassName("results");
  x[0].innerHTML = "<p>" + winmsg + "</p>";
}

/*****ALTERNATE METHOD WITH JUST IF STATEMENTS 
  //situations for player to win
  // 1 beat 0 | 0 beat 2  | 2 beat 1 
  if ( (computer.currentChoice === choices[0] && player.currentChoice === choices[1])
    || (computer.currentChoice === choices[2] && player.currentChoice === choices[0])
    || (computer.currentChoice === choices[1] && player.currentChoice === choices[2]))
  {
    console.log("Player chose: " + player.currentChoice + ", Player Wins!");
  }
  
  //situations for computer to win
  // 1 beat 0 | 0 beat 2  | 2 beat 1 
  if ( (player.currentChoice === choices[0] && computer.currentChoice === choices[1])
    || (player.currentChoice === choices[2] && computer.currentChoice === choices[0])
    || (player.currentChoice === choices[1] && computer.currentChoice === choices[2]))
  {
    console.log("Computer chose: " + computer.currentChoice + ", Computer Wins!");
  }
  
  if( computer.currentChoice === player.currentChoice){
    console.log("Its a tie!");
  }
  *******/
