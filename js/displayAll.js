import { gameDetails, home } from "./gamedetails.js";
import { getGameDetalies } from "./getData.js";

export function displayAllData(list) {
  let blackBox = ``;

  for (let i = 0; i < list.length; i++) {
    blackBox += `
       <div data-id="${list[i].id}" class="col-md-6 col-lg-4 col-xl-3 card-game">

            <div class="card bg-transparent">

              <div class="card-img p-3 pb-0">
                <img src="${list[i].thumbnail}" class="card-img-top" alt="...">
              </div>


              <div class="card-body">
                  <div class="card-title d-flex justify-content-between align-items-center">
                    <h5 class="mb-0">${list[i].title}</h5>
                    <span class="badge text-bg-primary p-2">Free</span>
                  </div>
                <p class="card-text text-center">${list[i].short_description.split(" ", 7).join(" ")}</p>
              </div>


              <div class="card-footer text-body-secondary d-flex justify-content-between">
                <span class="badge footer-badge">${list[i].genre}</span>
                <span class="badge footer-badge">${list[i].platform}</span>
              </div>
            </div>


          </div>`;
  }

  document.getElementById("games").innerHTML = blackBox;

  let cardGame = document.querySelectorAll(".card-game");
  for (let i = 0; i < cardGame.length; i++) {
    cardGame[i].addEventListener("click", function (e) {
      getGameDetalies(e.currentTarget.getAttribute("data-id"));
      gameDetails.classList.remove("d-none");
      home.classList.add("d-none");
    });
  }
}
