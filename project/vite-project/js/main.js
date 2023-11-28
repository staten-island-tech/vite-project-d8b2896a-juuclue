import "../styles/style.css";
import "../js/dom.js";
import "../js/cards.js";
import "../js/button.js";

document.querySelector("theme").addEventListener("click", function() {
    if(document.body.classList.contains("pinkity")) {
    document.body.classList.add("drinkity");
    document.body.classList.remove("pinkity");
    } else{
    document.body.classList.add("pinkity");
    document.body.classList.remove("driinkity");
    }
});


