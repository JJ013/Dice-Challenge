function randomNumber1() {
  var random1 = Math.round((Math.random() * (6 - 1)) + 1);
  var diceimages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
  var dice1 = diceimages.at((random1 - 1));
  document.querySelector(".img1").setAttribute("src", dice1);
  return random1;
}

function randomNumber2() {
  var random2 = Math.round((Math.random() * (6 - 1)) + 1);
  var diceimages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
  var dice2 = diceimages.at((random2 - 1));
  document.querySelector(".img2").setAttribute("src", dice2);
  return random2;
}

function winLoseDraw(random1, random2) {
  if (random1 > random2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (random1 == random2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
}

function diceFight() {
  randomNumber1();
  randomNumber2();
  winLoseDraw(randomNumber1(), randomNumber2());
}
