window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
});


const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".you img");
const botResult = document.querySelector(".computer img");
const result = document.querySelector(".situation p");
const optionImages = document.querySelectorAll(".option");

const botImages = ["./images/rock.png", "./images/paper.png", "./images/scissor.png"];
const outcomes = {
  RR: "Draw",
  RP: "BOT",
  RS: "YOU",
  PP: "Draw",
  PR: "YOU",
  PS: "BOT",
  SS: "Draw",
  SR: "BOT",
  SP: "YOU"
};

function 