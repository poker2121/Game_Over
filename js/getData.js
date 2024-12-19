import { displayAllData } from "./displayAll.js";

class DataManager {
  constructor() {
    this.apiKey = '025be1d53bmsh2d58f28d81492e2p17f625jsnf92b413c6d7b';
    this.apiHost = 'free-to-play-games-database.p.rapidapi.com';
  }

  async fetchData(url) {
    this.showLoading();
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': this.apiKey,
        'x-rapidapi-host': this.apiHost
      }
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const result = await response.json();
        this.hideLoading();
        return result;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    this.hideLoading();
  }

  showLoading() {
    document.querySelector(".loading").classList.remove("d-none");
  }

  hideLoading() {
    document.querySelector(".loading").classList.add("d-none");
  }

  async getAllGames() {
    const result = await this.fetchData("https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg");
    if (result) {
      displayAllData(result);
    }
  }

  async getGameWithCategory(game) {
    const result = await this.fetchData(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game}`);
    if (result) {
      displayAllData(result);
    }
  }

  async getGameDetails(gameId) {
    const result = await this.fetchData(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`);
    if (result) {
      this.displayGameDetails(result);
    }
  }

  displayGameDetails(game) {
    document.querySelector(".game-title").innerHTML = `Title: ${game.title}`;
    document.querySelector(".game-catagory span").innerHTML = game.genre;
    document.querySelector(".game-platform span").innerHTML = game.platform;
    document.querySelector(".game-Status span").innerHTML = game.status;
    document.querySelector(".game-description").innerHTML = game.description;
    document.querySelector(".img-deteails").setAttribute('src', game.thumbnail);
    document.querySelector(".game-link").setAttribute("href", game.game_url);
  }
}

export const dataManager = new DataManager();

export const getAllGames = () => dataManager.getAllGames();
export const getGameWithCategory = (game) => dataManager.getGameWithCategory(game);
export const getGameDetails = (gameId) => dataManager.getGameDetails(gameId);

