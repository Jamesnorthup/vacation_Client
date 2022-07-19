
import postUserInput from "./modules/submitButtionAction.mjs";
import getWeatherFromLatLong from "./modules/getLatLong.mjs";
import LoadCards from "./modules/LoadCards.mjs";

document.getElementById("submitButton").onclick = function (event) {
  event.preventDefault()
  postUserInput()
  setTimeout(() => { LoadCards(); }, 100);
}

getWeatherFromLatLong();
LoadCards()








