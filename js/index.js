import { dataManager, getAllGames, getGameWithCategory } from "./getData.js";

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active");
    }
    this.classList.add("active");
    getGameWithCategory(this.innerHTML);
  });
});

getAllGames();

