

import generateCard from "./generateCard.mjs";

import PhotoRequest from "./UnsplashPhotoRequest.mjs";

export default async function LoadCards() {
  const removeAll = document.getElementById("destinations_container")
  removeAllChildNodes(removeAll);



  const res = await fetch('https://vacationapplication.herokuapp.com/')
  const json = await res.json();
  let destinationsArray = json.data
  console.log(destinationsArray)
  destinationsArray.map(destination => {

    console.log(destination._id)
    PhotoRequest(destination.location, destination.name).then(imageURL =>
      generateCard(destination.name, destination.location, imageURL, destination.description, destination._id)).then(
    )
  })
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

