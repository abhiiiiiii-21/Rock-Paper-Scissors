window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
});

const options = document.querySelectorAll(".option");
const userChoiceImg = document.getElementById("userChoice");
const botChoiceImg = document.getElementById("botChoice");
const resultText = document.getElementById("result");

const choices = ["rock", "paper", "scissors"];


