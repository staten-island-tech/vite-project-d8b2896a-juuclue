import "../styles/style.css";
import { DOMSelectors } from "./dom";
import { home } from "./cards";


document.querySelector(".theme").addEventListener("click", function(e) {
    console.log(e.target)
    if(document.body.classList.contains("pinkity")) {
    document.body.classList.add("drinkity");
    document.body.classList.remove("pinkity");
    } else{
    document.body.classList.add("pinkity");
    document.body.classList.remove("drinkity");
    }
});

function blah(){
 home.forEach((item)=> DOMSelectors.cards.insertAdjacentHTML("beforeend",
 `<div class="card" id="all">
 <h2 class="card-name">${item.name}</h2>
 <img src="${item.image}" alt = "${item.name}" class="image">
 <h3 class = "info">${item.description}, ${item.classification}</h3>
 </div>
 `
 ));
}


function kitchen(){
    const find = home.filter((item)=> item.classification.includes("kitchen"));
    find.forEach((item) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
    `<div class="card" id"kitchen">
 <h2 class="card-name">${item.name}</h2>
 <img src="${item.image}" alt = "${item.name}" class="image">
 <h3 class = "info">${item.description}, ${item.classification}</h3>
 </div>
 `
    ));
}

function flooring(){
    const find = home.filter((item)=> item.classification.includes("flooring"));
    find.forEach((item) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
    `<div class="card" id="flooring">
 <h2 class="card-name">${item.name}</h2>
 <img src="${item.image}" alt = "${item.name}" class="image">
 <h3 class = "info">${item.description}, ${item.classification}</h3>
 </div>
 `
    ));
}

function exterior(){
    const find = home.filter((item)=> item.classification.includes("exterior"));
    find.forEach((item) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
    `<div class="card" id="exterior">
 <h2 class="card-name">${item.name}</h2>
 <img src="${item.image}" alt = "${item.name}" class="image">
 <h3 class = "info">${item.description}, ${item.classification}</h3>
 </div>
 `
    ));
}

function interior(){
    const find = home.filter((item)=> item.classification.includes("interior"));
    find.forEach((item) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
    `<div class="card" id="interior">
 <h2 class="card-name">${item.name}</h2>
 <img src="${item.image}" alt = "${item.name}" class="image">
 <h3 class = "info">${item.description}, ${item.classification}</h3>
 </div>
 `
    ));
}

function bathroom(){
    const find = home.filter((item)=> item.classification.includes("bathroom"));
    find.forEach((item) => DOMSelectors.cards.insertAdjacentHTML("beforeend",
    `<div class="card" id="bathroom">
 <h2 class="card-name">${item.name}</h2>
 <img src="${item.image}" alt = "${item.name}" class="image">
 <h3 class = "info">${item.description}, ${item.classification}</h3>
 </div>
 `
    ));
}


 DOMSelectors.all.addEventListener("click", function () {
    DOMSelectors.cards.innerHTML = '';
    blah();
 });
 DOMSelectors.h2.addEventListener("click", function () {
    DOMSelectors.cards.innerHTML = '';
    kitchen();
 });
 DOMSelectors.h3.addEventListener("click", function () {
    DOMSelectors.cards.innerHTML = '';
    flooring();
 });
 DOMSelectors.h4.addEventListener("click", function () {
    DOMSelectors.cards.innerHTML = '';
    exterior();
 });
 DOMSelectors.h5.addEventListener("click", function () {
    DOMSelectors.cards.innerHTML = '';
    interior();
 });
 DOMSelectors.h6.addEventListener("click", function () {
    DOMSelectors.cards.innerHTML = '';
    bathroom();
 });
 blah();


