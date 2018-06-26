
var wordsList = ["xxxtentacion", "kendrick", "meekmill", "liluzivert", "chancetherapper", "kanyewest",
    "chiefkeef", "earl", "future", "richthekid", "youngthug", "juicewrld", "tayk",
    "travisscott", "quavo", "offset", "madeintyo"];

    //variables
var chosenWord = "";

var lettersInChosenWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = "";

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 12;

//functions

function startGame() {

  numGuesses = 12;

  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

  lettersInChosenWord = chosenWord.split("");

  numBlanks = lettersInChosenWord.length;

  console.log(chosenWord);

  blanksAndSuccesses = [];

  wrongGuesses = [];

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  console.log(blanksAndSuccesses);

  document.getElementById("guesses-left").innerHTML = numGuesses;

  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {

  var letterInWord = false;

  for (var i = 0; i < numBlanks; i++) {

    if (chosenWord[i] === letter) {

      letterInWord = true;
    }
  }

  if (letterInWord) {

    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {

        blanksAndSuccesses[j] = letter;
      }
    }

    console.log(blanksAndSuccesses);
  }

  else {

    wrongGuesses.push(letter);

    numGuesses--;

  }

}

function roundComplete() {

  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  document.getElementById("guesses-left").innerHTML = numGuesses;

  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    winCounter++;

    alert("You win!");
    var audio = new Audio('assets/img/audioclip');
    audio.play();
    document.getElementById("win-counter").innerHTML = winCounter;

    startGame();
  }

  else if (numGuesses === 0) {

    lossCounter++;

    alert("You lose");

    document.getElementById("loss-counter").innerHTML = lossCounter;

    startGame();

  }

}
//start the game up 
startGame();

document.onkeyup = function(event) {

  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  checkLetters(letterGuessed);

  roundComplete();
};
