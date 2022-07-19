import LoadCards from "./LoadCards.mjs";
import PhotoRequest from "./UnsplashPhotoRequest.mjs";


export default function editThisCard(cardHolder) {
    console.log("edit")
    var id = cardHolder.id
    var updateName = window.prompt("Enter new name");
    var updateLocation = window.prompt("Enter new location");
    var updateDescription = window.prompt("Enter new Description");
    var updatePhoto = "photoURL" //PhotoRequest(updateDescription, updateLocation)


    fetch("https://vacationapplication.herokuapp.com/", {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            id: id,
            name: updateName,
            location: updateLocation,
            photo: updatePhoto,
            description: updateDescription
        })
    }).then(res => {

        if (res.ok) return res.json()
    })
        .then(response => {
            LoadCards()
        })
}
