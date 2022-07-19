import deleteThisCard from "./deleteButtonAction.mjs"
import editThisCard from "./editButtonAction.mjs"
import putDetailsChangePage from "./imgAction.mjs"

export default async function generateCard(destination, location, photo, description, imageID) {

    // Generate Card structure
    let cardImage = document.createElement("img")
    cardImage.setAttribute("src", photo)

    let removebutton = document.createElement("button")
    removebutton.setAttribute("class", "removebutton")
    removebutton.setAttribute("id", `"${imageID}"`)
    removebutton.setAttribute("onclick", `removeFunction(${imageID})`)
    removebutton.textContent = "Remove"

    let editbutton = document.createElement("button")
    let editId = imageID
    editbutton.setAttribute("class", "editbutton")
    editbutton.setAttribute("id", `"${editId}"`)
    editbutton.setAttribute("onclick", `removeFunction(${editId})`)
    editbutton.textContent = "Edit"

    let cardHolder = document.createElement("div")
    cardHolder.setAttribute("id", imageID)
    cardHolder.setAttribute("class", "cardHolder")

    const cardTitle = document.createElement(`p`)
    cardTitle.setAttribute("class", "card-text")
    cardTitle.textContent = location

    const cardHeader = document.createElement(`h`)
    cardHeader.setAttribute("class", "card-title")
    cardHeader.textContent = destination

    // Action Listeners
    cardImage.onclick = function () {
        putDetailsChangePage(destination, location, photo, description)

        window.open("./layouts/VacationDescription.html", "_blank")
    };

    editbutton.onclick = function (imageID) {
        editThisCard(cardHolder)
    }

    removebutton.onclick = function () {
        deleteThisCard(imageID)
        cardHolder.remove()
    }

    // Append elements to cards
    cardHolder.appendChild(cardImage)
    cardHolder.appendChild(cardHeader)
    cardHolder.appendChild(cardTitle)
    cardHolder.appendChild(removebutton)
    cardHolder.appendChild(editbutton)

    // Append Card to index.html constainer
    document.getElementById("destinations_container").append(cardHolder);
}