

import PhotoRequest from "./UnsplashPhotoRequest.mjs";
export default async function getUserInput(event) {
    const userInputTextName = ["name", "location", "photo", "description"];
    let formInput = [];

    for (const element of userInputTextName) {
        let inputText = event.target.elements[element].value;
        formInput.push(inputText);
    }
    formInput[2] = PhotoRequest(formInput[0], formInput[1])

    postVacationCollection(formInput)
    return formInput;
}

async function postVacationCollection(formInput) {
    fetch('https://vacationapplication.herokuapp.com/clientFormInput', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: formInput[0],
            location: formInput[1],
            photo: formInput[2],
            description: formInput[3]
        })
    }).then(res => {

        if (res.ok) return res.json()
    })

}

