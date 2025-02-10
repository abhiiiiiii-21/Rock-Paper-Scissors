window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
});

const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".you img");
const botResult = document.querySelector(".computer img");
const result = document.querySelector(".situation span");
const optionImages = document.querySelectorAll(".option");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = botResult.src = "./images/rock.png";
        result.textContent = "Rukoo Zara...";
        result.style.color = "white";

        optionImages.forEach((image2, index2) => {
            if (index !== index2) image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            let imageSrc = image.querySelector("img").src;
            userResult.src = imageSrc;

            let randomNum = Math.floor(Math.random() * 3);
            let computerImages = ["./images/rock.png", "./images/paper.png", "./images/scissor.png"];
            botResult.src = computerImages[randomNum];

            let cpuValue = ["R", "P", "S"][randomNum];
            let yourValue = ["R", "P", "S"][index];

            let outcomes = {
                RR: "Draw",
                RP: "Oops!! you lost",
                RS: "Ohoo!! you won",

                PP: "Draw",
                PR: "Ohoo!! you won",
                PS: "Oops!! you lost",

                SS: "Draw",
                SP: "Ohoo!! you won",
                SR: "Oops!! you lost",
            };

            let outcomeValue = outcomes[yourValue + cpuValue];

            result.textContent = yourValue === cpuValue ? "Shit!! draw ho gya" : `${outcomeValue}`;

            if (outcomeValue === "Ohoo!! you won") {
                result.style.color = "#19FF19";
            } else if (outcomeValue === "Oops!! you lost") {
                result.style.color = "red";
            } else if (outcomeValue === "Draw") {
                result.style.color = "gray";  
            } else {
                result.style.color = "#7d2ae8";  
            }

        }, 2500);
    });
});
