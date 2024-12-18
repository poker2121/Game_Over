import { getAllGames, getGameWithCategory } from "./getData.js";
import { closeGameDetails, ClossDetails } from "./gamedetails.js";

let navLinks = document.querySelectorAll(".nav-link")

// show all game when i open 
getAllGames();

// this to close section game detalis
closeGameDetails.addEventListener("click", ClossDetails);


for (let i = 0; i < navLinks.length; i++) {
    
    navLinks[i].addEventListener("click",function(){

        for (let j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove("active");
        }

        navLinks[i].classList.add("active");

        getGameWithCategory(navLinks[i].innerHTML);
    })
    
}
