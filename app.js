//javascript file
// Write your code below:

let fruit = document.querySelectorAll("li");

fruit[4].style.color = "red";

fruit.forEach((fr) => {
    fr.style.fontStyle = "italic";
})


//use of querySelector & querySelectorAll 

/ Write the code as shown in the video below:

// Write answer to the questions asked below:
let basket = document.querySelector("#basket-heading");

basket.style.color = "brown";

let fruits = document.querySelectorAll(".fruit");

for (let i = 0; i < fruits.length; i++){
    if (i % 2 != 0) {
        fruits[i].style.backgroundColor = "brown";
        fruits[i].style.color = "white";
    }
    fruits[i].style.listStyle = "none";
}
