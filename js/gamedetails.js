class GameDetails {
        constructor() {
          this.closeGameDetails = document.getElementById("close-game-details");
          this.gameDetails = document.getElementById("game-details");
          this.home = document.getElementById("home");
          this.setupEventListeners();
        }
      
        setupEventListeners() {
          this.closeGameDetails.addEventListener("click", () => this.closeDetails());
        }
      
        closeDetails() {
          this.gameDetails.classList.add("d-none");
          this.home.classList.remove("d-none");
        }
      
        showDetails() {
          this.gameDetails.classList.remove("d-none");
          this.home.classList.add("d-none");
        }
      }
      
      export const gameDetailsManager = new GameDetails();
      
      export const closeGameDetails = gameDetailsManager.closeGameDetails;
      export const gameDetails = gameDetailsManager.gameDetails;
      export const home = gameDetailsManager.home;
      export const ClossDetails = () => gameDetailsManager.closeDetails();
      
      