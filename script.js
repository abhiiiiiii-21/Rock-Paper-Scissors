window.addEventListener("load", function () {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
  });
  
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".you img");
const botResult = document.querySelector(".computer img");
const result = document.querySelector(".situation p");
const optionImages = document.querySelectorAll(".option");


optionImages.forEach((image,index) => {

    image.addEventListener("click", (e) => {
        image.classList.add("active")

        optionImages.forEach((image2,index2) => {
            index !== index2 && image2.classList.remove("active")
        });  

        let imageSrc = e.target.querySelector("img").src
        userResult.src = imageSrc

        let randomNum = Math.floor(Math.random()* 3)
        let computerImages = ["./images/rock.png","./images/paper.png","./images/scissor.png"]
        botResult.src = computerImages[randomNum]
                
    })
});