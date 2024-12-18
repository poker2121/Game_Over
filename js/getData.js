import { displayAllData } from "./displayAll.js";

let gametitle = document.querySelector(".game-title");
let gameCatagory = document.querySelector(".game-catagory span");
let gamePlatform = document.querySelector(".game-platform span");
let gameStatus = document.querySelector(".game-Status span");
let gamedDescription = document.querySelector(".game-description");
let imgDeteails = document.querySelector(".img-deteails");
let gameLink = document.querySelector(".game-link")
let loading = document.querySelector(".loading")


function spanerloading(load){
    if(load==0){
        loading.classList.remove("d-none")
    }else if(load==1){
        loading.classList.add("d-none")
    }
    
}

export async function getAllGames() {
    spanerloading(0);
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '025be1d53bmsh2d58f28d81492e2p17f625jsnf92b413c6d7b',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }

const response = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg",options );

if (response.ok) {
const result = await response.json();
console.log(result)
displayAllData(result)
}
spanerloading(1);
}



export async function getGameWithCategory(game) {
    
    spanerloading(0);
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '025be1d53bmsh2d58f28d81492e2p17f625jsnf92b413c6d7b',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }

const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${game}`,options );

if (response.ok) {
const result = await response.json();
console.log(result)
displayAllData(result)
}
spanerloading(1);
}



export async function getGameDetalies(gameId) {
    
    spanerloading(0);

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '025be1d53bmsh2d58f28d81492e2p17f625jsnf92b413c6d7b',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    }

const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,options );

if (response.ok) {
const result = await response.json();

console.log(result)
gametitle.innerHTML = `Title: ${result.title}`;
gameCatagory.innerHTML=`${result.genre}`;
gamePlatform.innerHTML=`${result.platform}`;
gameStatus.innerHTML=`${result.status}`;
gamedDescription.innerHTML=`${result.description}`;
imgDeteails.setAttribute('src',`${result.thumbnail}`)
gameLink.setAttribute("href",`${result.game_url}`)
}
spanerloading(1);

}









